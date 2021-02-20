const convertToMonthName = (month: number): string | undefined => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return monthNames[month]
}

const getTimePassed = (time: number): string => {
  const hoursPassed = new Date().getHours() - new Date(time * 1000).getHours()

  if (hoursPassed > 0) {
    return hoursPassed === 1 ? `${hoursPassed} hour` : `${hoursPassed} hours`
  } else {
    const minutesPassed = new Date().getMinutes() - new Date(time * 1000).getMinutes()
    return minutesPassed === 1 ? `${minutesPassed} minute` : `${minutesPassed} minutes`
  }
}

const getDate = (time: number): string => {
  const date = new Date(time * 1000)

  const day = date.getDay()
  const month = convertToMonthName(date.getMonth())
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}

export { getTimePassed, getDate }
