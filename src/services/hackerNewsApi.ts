import ApiService from './api'

const FIREBASE_BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const JSON_QUERY = '.json?print=pretty'
const ALGOLIA_BASE_URL = 'http://hn.algolia.com/api/v1'

const PAGE_LIMIT = 20

const firebaseClient = new ApiService(FIREBASE_BASE_URL)
const algoliaClient = new ApiService(ALGOLIA_BASE_URL)

const getPageSlice = (limit: number, page = 0) => ({ begin: page * limit, end: (page + 1) * limit })
const getPageValues = (begin: number, end: number, items: number[]) => items.slice(begin, end)

const hackerNewsApi = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getBestStoryIds: () => firebaseClient.get(`/beststories${JSON_QUERY}`),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getTopStoryIds: () => firebaseClient.get(`/topstories${JSON_QUERY}`),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getNewStoryIds: () => firebaseClient.get(`newstories${JSON_QUERY}`),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getStoryById: (id: number) => firebaseClient.get(`/item/${id}${JSON_QUERY}`),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getStoryDetailsById: (id: number) => algoliaClient.get(`/items/${id}`),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getStoriesByPage: (ids: number[], page: number) => {
    const { begin, end } = getPageSlice(PAGE_LIMIT, page)
    const activeIds = getPageValues(begin, end, ids)

    const storyPromises = activeIds.map((id: number) => hackerNewsApi.getStoryById(id))
    return Promise.all(storyPromises)
  }
}

export default hackerNewsApi
