/**
 * scroll smoothly to the first matching element
 * 
 * @param {String} str the css selector
 * 
 * const scrollToFirstInvalidField = scrollToSelector('.invalid')
 * 
 * useEffect(scrollToFirstInvalidField, [invalidFields])
 */
export const scrollToSelector = selector => () => {
  let firstInvalidField = document.querySelector(selector)
  firstInvalidField.scrollIntoView({behavior: 'smooth', block: 'center'})
}