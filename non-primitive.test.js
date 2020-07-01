const fn = require('./non-primitive')

describe('selectiveZero function', () => {
  it('should replace the value to 0 if target matches the element', () => {
    const arr =[5,2,2,9]
    fn.selectiveZero(arr, 2)
    expect(arr).toEqual([5,0,0,9])
  })
  it('should keep the same array if there is no match', () => {
    const arr =[5,2,2,9]
    const original = [...arr]
    fn.selectiveZero(arr, 1)
    expect(arr).toEqual(original)
  })
  it('should return an empty array', () => {
    const arr = []
    const result = fn.selectiveZero(arr, 1)
    expect(result).toEqual(arr)
  })
})

describe('largestNum function', () => {
  it('should return the largest num', () => {
    const arr =[5,2,2,9]
    const result = fn.largestNum(arr)
    expect(result).toEqual(9)
  })
  it('should return the largest num within negatives', () => {
    const arr =[-5,-2,-2,-9, -1]
    const result = fn.largestNum(arr)
    expect(result).toEqual(-1)
  })
  it('should return undefined on empty array', () => {
    const arr = []
    const result = fn.largestNum(arr)
    expect(result).toEqual(undefined)
  })
})

describe('firstXToZero function', () => {
  it('should change the first 3 to 0', () => {
    const arr =[5,2,2,9]
    fn.firstXToZero(arr, 3)
    expect(arr).toEqual([0,0,0,9])
  })
  it('should change all to 0', () => {
    const arr =[-5,-2,-2,-9, -1]
    fn.firstXToZero(arr, 5)
    expect(arr).toEqual([0,0,0,0,0])
  })
  it('should still return if num is higher than length', () => {
    const arr =[-5,-2,-2,-9, -1]
    fn.firstXToZero(arr, 10)
    expect(arr).toEqual([0,0,0,0,0])
  })
})