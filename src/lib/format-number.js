export default function formatNumber(num, dec = 0, decPoint = '.', thousandsSep = ',') {
  if (typeof num !== 'number') return null
  const re = '\\d(?=(\\d{3})+' + (dec > 0 ? `\\${decPoint}` : '$') + ')'
  return num
    .toFixed(Math.max(0, ~~dec))
    .replace('.', decPoint)
    .replace(new RegExp(re, 'g'), `$&${thousandsSep}`)
}
