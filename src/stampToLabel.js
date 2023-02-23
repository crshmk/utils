/**
 * creates a function to turn unix timestamps (milliseconds) into label 
 * 
 * @param {String} config display options
 * @param {String} stamp timestamp
 * 
 * @return {String} date label
 * 
 * const makeTimeLabel = stampToLabel('md')
 * makeTimeLabel(1677104219000)
 * //=> '1/22'
 * 
 * const makeTimeLabel = stampToLabel('mdy-')
 * makeTimeLabel(1655902653802)
 * //=> '1-22-2023'
 */
import { isPresent } from './isPresent'

export const stampToLabel = config => stamp => {
  const date = new Date(stamp)
  const m = config.includes('m') ? date.getUTCMonth() : ''
  const d = config.includes('d') ? date.getUTCDate() : ''
  const y = config.includes('y') ? date.getUTCFullYear() : ''
  const separator = config.includes('-') ? '-' : '/'
  return [m, d, y].filter(isPresent).join(separator)
}