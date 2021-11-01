/**
 * 时间格式化
 *
 * @param [d] {Date} - Date 对象，默认为当前时间
 * @param [format] {String} - 格式模板，默认为 `2019-04-01 01:02:03`
 * @return {String} - 格式化后的时间字符串
 */
export function formatDate (d = new Date(), format = 'YYYY-MM-DD HH:mm:ss') {
  if (!d) {
    return ''
  }
  if (typeof d === 'string') {
    d = new Date(d)
  }
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()

  return format
    .replace('YYYY', year.toString())
    .replace('YY', (year % 100 + '').padStart(2, '0'))
    .replace('MM', (month + '').padStart(2, '0'))
    .replace('M', month.toString())
    .replace('DD', (date + '').padStart(2, '0'))
    .replace('D', date.toString())
    .replace('HH', (hour + '').padStart(2, '0'))
    .replace('H', hour.toString())
    .replace('hh', (hour % 12 + '').padStart(2, '0'))
    .replace('h', (hour % 12).toString())
    .replace('mm', (minute + '').padStart(2, '0'))
    .replace('m', minute.toString())
    .replace('ss', (second + '').padStart(2, '0'))
    .replace('s', second.toString())
}
