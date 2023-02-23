import { stampToLabel } from '../stampToLabel'

const stamp = 1677104219000

describe('stampToLabel', () => { 
  test('includes day, month, or year in label according to config', () => {
    const makeMonthDayYearLabel = stampToLabel('mdy')
    expect(makeMonthDayYearLabel(stamp)).toBe('1/22/2023')

    const makeMonthDayLabel = stampToLabel('md')
    expect(makeMonthDayLabel(stamp)).toBe('1/22')

    const makeMonthYearLabel = stampToLabel('my')
    expect(makeMonthYearLabel(stamp)).toBe('1/2023')

    const makeMonthLabel = stampToLabel('m')
    expect(makeMonthLabel(stamp)).toBe('1')

    const makeDayLabel = stampToLabel('d')
    expect(makeDayLabel(stamp)).toBe('22')

    const makeYearLabel = stampToLabel('y')
    expect(makeYearLabel(stamp)).toBe('2023')
  })
  test('separates day, month, year but "-" or "/" according to config', () => {
    const makeLabelWithSlash = stampToLabel('mdy')
    expect(makeLabelWithSlash(stamp)).toBe('1/22/2023')

    const makeLabelWithDash = stampToLabel('mdy-')
    expect(makeLabelWithDash(stamp)).toBe('1-22-2023')
  })
 })