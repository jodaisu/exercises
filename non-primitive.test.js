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

describe('allPrime function', () => {
  it('should return true if all elements are prime', () => {
    const arr = [3,5,7,11]
    const result = fn.allPrime(arr)
    expect(result).toEqual(true)
  })
  it('should return false if not all elements are prime', () => {
    const arr = [3,2,5,6,9]
    const result = fn.allPrime(arr)
    expect(result).toEqual(false)
  })
  it('should return false on empty array', () => {
    const arr = []
    const result = fn.allPrime(arr)
    expect(result).toEqual(undefined)
  })
})

describe('increasing function', () => {
  it('should be ascending order', () => {
    const arr = [1,4,5,87]
    const result = fn.increasing(arr)
    expect(result).toEqual(true)
  })
  it('should return false for not ascending', () => {
    const arr = [1,4,100,87]
    const result = fn.increasing(arr)
    expect(result).toEqual(false)
  })
  it('should return false for a repeated number', () => {
    const arr = [1,4,4,100,87]
    const result = fn.increasing(arr)
    expect(result).toEqual(false)
  })
})