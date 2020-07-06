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


describe('oddToZero function', () => {
    it('should zero when some elements are odd', () => {
        const result = fn.oddToZero([1, 2, 3, 4, 5])
        expect(result).toEqual([0, 2, 0, 4, 0])
    })
    it('should zero when all elements are odd', () => {
        const result = fn.oddToZero([1, 3])
        expect(result).toEqual([0, 0])
    })
    it('should return same array when no elements are odd', () => {
        const result = fn.oddToZero([8, 10, 12])
        expect(result).toEqual([8, 10, 12])
    })
})

describe('firstLetters function', () => {
    it('should grab the first letters from 5 strings', () => {
        const result = fn.firstLetters(["hello", "my", "name", "is", "pikachu"])
        expect(result).toEqual(["h", "m", "n", "i", "p"])
    })
    it('should grab the first letters from 3 strings', () => {
        const result = fn.firstLetters(["JavaScript", "is", "awesome"])
        expect(result).toEqual(["J", "i", "a"])
    })
    it('should return an empty array when given an empty array', () => {
        const result = fn.firstLetters([])
        expect(result).toEqual([])
    })
})

describe('firstXToZeroMap function', () => {
  it('should change the first 3 to 0', () => {
    const arr =[5,2,2,9]
    const result = fn.firstXToZeroMap(arr, 3)
    expect(result).toEqual([0,0,0,9])
  })
  it('should change all to 0', () => {
    const arr =[-5,-2,-2,-9, -1]
    const result = fn.firstXToZeroMap(arr, 5)
    expect(result).toEqual([0,0,0,0,0])
  })
  it('should still return if num is higher than length', () => {
    const arr =[-5,-2,-2,-9, -1]
    const result = fn.firstXToZeroMap(arr, 10)
    expect(result).toEqual([0,0,0,0,0])
  })
})

describe('nonPrimeToZero function', () => {
    it('should zero all numbers when non-prime', () => {
        const result = fn.nonPrimeToZero([-13, 0, 1, 4, 6])
        expect(result).toEqual([0, 0, 0, 0, 0])
    })
    it('should return an identical array if all are prime', () => {
        const result = fn.nonPrimeToZero([2, 17, 1601, 7919])
        expect(result).toEqual([2, 17, 1601, 7919])
    })
    it('should change only prime numbers to 0', () => {
        const result = fn.nonPrimeToZero([1, 2, 3, 4, 5])
        expect(result).toEqual([0, 2, 3, 0, 5])
    })
})

describe('append', () => {
  it('should append a string to 5 strings', () => {
      const result = fn.append(["hello", "my", "name", "is", "pikachu"], ' -log')
      expect(result).toEqual(["hello -log", "my -log", "name -log", "is -log", "pikachu -log"])
  })
  it('should append a string to 2 strings', () => {
      const result = fn.append(["<img/>", "<p></p>"], "<hr/>")
      expect(result).toEqual(["<img/><hr/>", "<p></p><hr/>"])
  })
  it('should not modify the original array', () => {
      const arr = ["Spiderman", "Peter Parker"]
      fn.append(arr, "Mary Jane")
      expect(arr).toEqual(["Spiderman", "Peter Parker"])
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

describe('clone function', () => {
    const farm1 = ["sheep", "cow", "pig"]
    const farm2 = fn.clone(farm1)
    it('should clone an array of several elements', () => {
        expect(farm1).toEqual(farm2) // deep equality
    })
    it('should not return the same array', () => {
        expect(farm1 === farm2).toBeFalsy()
    })
    it('should clone an empty array', () => {
        expect(fn.clone([])).toEqual([])
    })
})

describe('noMoreEvens function', () => {
    it('should remove evens from an array with a mix of numbers', () => {
        const result = fn.noMoreEvens([1, 2, 6, 4, 5])
        expect(result).toEqual([1,5])
    })
    it('should remove all numbers when even', () => {
        const result = fn.noMoreEvens([2, 16, 40, 52])
        expect(result).toEqual([])
    })
    it('should not touch an array of all odd numbers', () => {
        const result = fn.noMoreEvens([1, 571, 3, 9])
        expect(result).toEqual([1, 571, 3, 9])
    })
    it('should remove negative even numbers as well', () => {
        const result = fn.noMoreEvens([-2, -571, -4])
        expect(result).toEqual([-571])
    })
})

describe('remove empty function', () => {
  it('should return [] when array is empty', () => {
      const result = fn.removeEmpty([])
      expect(result).toEqual([])
  })
  it('should return [] when array only has empty strings', () => {
      const result = fn.removeEmpty(["","",""])
      expect(result).toEqual([])
  })
  it('should return same array when array has no empty strings', () => {
      const result = fn.removeEmpty(["hello","world"])
      expect(result).toEqual(["hello","world"])
  })
  it('should return array without empty strings', () => {
      const result = fn.removeEmpty(["hello", "world", "", "name", "", "is"])
      expect(result).toEqual(["hello","world", "name", "is"])
  })
})

describe('primesOnly function', () => {
    it('should return empty array if no primes', () => {
        const result = fn.primesOnly([-13, 0, 1, 4, 6])
        expect(result).toEqual([])
    })
    it('should return an identical array if all are prime', () => {
        const result = fn.primesOnly([2, 17, 1601, 7919])
        expect(result).toEqual([2, 17, 1601, 7919])
    })
})