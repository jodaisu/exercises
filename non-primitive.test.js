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

describe('copyArray function', () => {
  it('should return an identical copy of array', () => {
    const arr = ["Rocket", "Groot", "StarLord"]
    const result = fn.copyArray(arr)
    expect(result).toEqual(["Rocket", "Groot", "StarLord"])
  })
  it('should not modify the original', () => {
    const arr = ["Rocket", "Groot", "StarLord"]
    const result = fn.copyArray(arr)
    arr[0] = "Drax"
    expect(result[0]).toEqual("Rocket")
  })
  it('should return an empty array', () => {
    const arr = []
    const result = fn.copyArray(arr)
    expect(result).toEqual([])
  })
})

describe('removeElement function', () => {
  it('should remove element that matches the string input', () => {
    const arr = ["Rocket", "Groot", "StarLord"]
    const result = fn.removeElement(arr, "Groot")
    expect(result).toEqual(["Rocket", "StarLord"])
  })
  it('should return the original array', () => {
    const arr = ["Rocket", "Groot", "StarLord"]
    const result = fn.removeElement(arr, "Groot")
    expect(result).toEqual(arr)
  })
  it('should remove more than one match', () => {
    const arr = ["Rocket", "Groot", "Groot", "StarLord"]
    const result = fn.removeElement(arr, "Groot")
    expect(result).toEqual(["Rocket", "StarLord"])
  })
})

describe('copyWithout function', () => {
  it('should copy all elements except that match the string input', () => {
    const arr = [5,2,2,9]
    const result = fn.copyWithout(arr, 2)
    expect(result).toEqual([5,9])
  })
  it('should return a copy', () => {
    const arr = [5,2,2,9]
    const result = fn.copyWithout(arr, 2)
    expect(arr).toEqual([5,2,2,9])
    expect(result).toEqual([5,9])
  })
  it('should make a copy if no elements match', () => {
    const arr = [5,2,2,9]
    const result = fn.copyWithout(arr, 10)
    expect(result).not.toBe(arr)
  })
})

describe('copyReverse function', () => {
  it('should make a copy in reverse order', () => {
    const arr = [5,2,2,9]
    const result = fn.copyReverse(arr)
    expect(result).toEqual([9,2,2,5])
  })
  it('should not modify original', () => {
    const arr = [5,2,2,9]
    fn.copyReverse(arr)
    expect(arr).toEqual([5,2,2,9])
  })
  it('should return an empty array', () => {
    const arr = []
    const result = fn.copyReverse(arr)
    expect(result).toEqual([])
  })
})

describe('copyLast function', () => {
  it('copy the array minus the number of items at the front', () => {
    const arr = ["Rocket", "Groot", "StarLord", "Drax"]
    const result = fn.copyLast(arr, 2)
    expect(result).toEqual(["StarLord", "Drax"])
  })
  it('should not modify original', () => {
    const arr = ["Rocket", "Groot", "StarLord", "Drax"]
    fn.copyLast(arr, 3)
    expect(arr).toEqual(["Rocket", "Groot", "StarLord", "Drax"])
  })
  it('should return an empty array', () => {
    const arr = []
    const result = fn.copyLast(arr, 0)
    expect(result).toEqual([])
  })
  it('should return an empty array if num is greater than array length', () => {
    const arr = ["Rocket", "Groot", "StarLord", "Drax"]
    const result = fn.copyLast(arr, 10)
    expect(result).toEqual([])
  })
})

describe('copyFirst function', () => {
  it('copy the array minus the number of items at the back', () => {
    const arr = ["Rocket", "Groot", "StarLord", "Drax"]
    const result = fn.copyFirst(arr, 2)
    expect(result).toEqual(["Rocket", "Groot"])
  })
  it('should not modify original', () => {
    const arr = ["Rocket", "Groot", "StarLord", "Drax"]
    fn.copyFirst(arr, 3)
    expect(arr).toEqual(["Rocket", "Groot", "StarLord", "Drax"])
  })
  it('should return an empty array', () => {
    const arr = []
    const result = fn.copyFirst(arr, 0)
    expect(result).toEqual([])
  })
  it('should return an empty array if num is greater than array length', () => {
    const arr = ["Rocket", "Groot", "StarLord", "Drax"]
    const result = fn.copyFirst(arr, 10)
    expect(result).toEqual([])
  })
})

describe('runOnEach function', () => {
  const heroes = ["Ironman", "Thor", "Captain"]
  const thanos = () => {
    return "Thanos"
  }
  it('calls a function on every el and returns result with the new arr', () => {
    const arr = [1,2,3,4,5]
    const result = fn.runOnEach(arr, (e,i) => e + i)
    expect(result).toEqual([1,3,5,7,9])
  })
  it('should not modify original', () => {
    const original = [...heroes]
    fn.runOnEach(heroes, thanos)
    expect(heroes).toEqual(original)
  })
  it('should call function with no args', () => {
    const result = fn.runOnEach(heroes, thanos)
    expect(result).toEqual(["Thanos", "Thanos", "Thanos"])
  })
})

describe('onlyIndex function', () => {
  const arr = [[1,2,3,4,5],
               [6,9,8,7,6],
               [4,5,6,6,7],
               [0,1,2,3,9]]
  it("returns only an array of each array's el at given index", () => {
    const result = fn.onlyIndex(arr, 2)
    expect(result).toEqual([3,8,6,2])
  })
  it('should not modify original', () => {
    const original = [...arr]
    fn.onlyIndex(arr, 2)
    expect(arr).toEqual(original)
  })
  it('should return blank array if index is more than the length', () => {
    const result = fn.onlyIndex(arr, 5)
    expect(result).toEqual([])
  })
})
