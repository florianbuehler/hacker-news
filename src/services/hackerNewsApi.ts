import ApiService from './api'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const JSON_QUERY = '.json?print=pretty'

const PAGE_LIMIT = 20

// @ts-ignore
const client = new ApiService({ baseURL: BASE_URL })

const getPageSlice = (limit: number, page = 0) => ({begin: page * limit, end: (page + 1) * limit})
const getPageValues = (begin: number, end: number, items: number[]) => items.slice(begin, end) 

const hackerNewsApi = {
  getBestStoryIds: () => client.get(`/beststories${JSON_QUERY}`),
  
  getTopStoryIds: () => client.get(`/topstories${JSON_QUERY}`),
  
  getNewStoryIds: () => client.get(`newstories${JSON_QUERY}`),
  
  getStoryById: (id: number) => client.get(`/item/${id}${JSON_QUERY}`),
  
  getStoriesByPage: (ids: number[], page: number) => {
    const {begin, end} = getPageSlice(PAGE_LIMIT, page)
    const activeIds = getPageValues(begin, end, ids)
    
    const storyPromises = activeIds.map((id: number) => hackerNewsApi.getStoryById(id))
    return Promise.all(storyPromises)
  }
}

export default hackerNewsApi

