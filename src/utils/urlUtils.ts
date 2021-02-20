const getUrl = (siteUrl: string): URL => {
  if (!siteUrl.includes('//')) {
    siteUrl = `http://${siteUrl}`
  }

  return new URL(siteUrl)
}

const getHostName = (siteUrl: string): string => {
  if (!siteUrl) {
    return ''
  }

  const url = getUrl(siteUrl)

  if (url.hostname.includes('www.')) {
    return url.hostname.split('www.')[1]
  }

  return url.hostname
}

const getOrigin = (siteUrl: string): string => {
  if (!siteUrl) {
    return ''
  }

  const url = getUrl(siteUrl)

  return url.origin
}

export { getHostName, getOrigin }
