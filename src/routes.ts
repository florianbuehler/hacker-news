import { include } from 'named-urls'

export default {
  home: '/',

  stories: include('/stories', {
    best: '/best',
    new: '/new',
    top: '/top'
  })
}
