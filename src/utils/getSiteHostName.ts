const getSiteHostName = (siteUrl: string): string => {
  let hostname = ''

  if (siteUrl) {
    if (!siteUrl.includes('//')) {
      siteUrl = `http://${siteUrl}`
    }

    hostname = new URL(siteUrl).hostname
  }

  if (hostname.includes('www.')) {
    hostname = hostname.split('www.')[1]
  }

  return hostname
}

export default getSiteHostName
