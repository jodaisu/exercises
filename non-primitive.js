const allFuns = {}

const selectiveZero = (arr, num, i = 0) => {
  if (i === arr.length) return arr
  if (arr[i] === num) arr[i] = 0
  return selectiveZero(arr, num, i + 1)
}

const largestNum = (arr, i = 0, max = arr[0]) => {
  if (i === arr.length) return max
  if (arr[i] > max) max = arr[i]
  return largestNum(arr, i + 1, max)
}

const firstXToZero = (arr, num, i = 0) => {
  if (i === arr.length) return arr
  if (i < num) {
    arr[i] = 0
  }
  return firstXToZero(arr, num, i + 1)
}

const isPrime = (num, i = 2) => {
  if (i === num) return true
  if (Math.abs(num) === 1 || num % i === 0) {
    return false
  }
  return isPrime(num, i + 1)
}

const allPrime = (arr, i = 0) => {
  if (arr.length === 0) return undefined
  if (i === arr.length) return true
  if (!isPrime(arr[i])) return false
  return allPrime(arr, i + 1)
}

const increasing = (arr, i = 1) => {
  if (i === arr.length) return true
  
  // check if curr is bigger than prev
  let prevNum = arr[i-1]
  let currNum = arr[i]

  if (prevNum >= currNum) return false

  return increasing(arr, i + 1)
}

const copyArray = (a, result = []) => {
  if (result.length === a.length) {
    return result
  }
  result.push(a[result.length])
  return copyArray(a, result)
}

const removeElement = (arr, str, i = 0) => {
  if (i === arr.length) return arr
  if (arr[i] === str) {
    arr.splice(i, 1)
    return removeElement(arr, str, i)
  }
  return removeElement(arr, str, i + 1)
}

const copyWithout = (a, str, result = [], i = 0) => {
  if (i === a.length) return result
  if (a[i] === str) return copyWithout(a, str, result, i + 1)
  result.push(a[i])
  return copyWithout(a, str, result, i + 1)
}

const copyReverse = (a, result = []) => {
  if (a.length === result.length) return result
  result.push(a[(a.length - 1) - result.length])
  return copyReverse(a, result)
}

const copyLast = (arr, num, result = []) => {
  if (num > arr.length) return result
  if (result.length === (arr.length - num)) return result
  result.unshift(arr[(arr.length - 1) - result.length])
  return copyLast(arr, num, result)
}

const copyFirst = (arr, num, result = []) => {
  if (num > arr.length) return result
  if (result.length === (arr.length - num)) return result
  result.push(arr[result.length])
  return copyFirst(arr, num, result)
}

const runOnEach = (arr, fun, result = [], i = 0) => {
  if (result.length === arr.length) return result
  result.push(fun(arr[i], i))
  return runOnEach(arr, fun, result, i + 1)
}

const onlyIndex = (arr, num, result = []) => {
  if (num >= arr[0].length) return []
  if (result.length === arr.length) return result
  result.push(arr[result.length][num])
  return onlyIndex(arr, num, result)
}

const oddToZero = (arr) => {
  return arr.map(item => {
    if (item % 2) return 0
    return item
  })
}

const firstLetters = (arr) => arr.map(item => item[0])

const firstXToZeroMap = (arr, num) => {
  return arr.map((item, index) => {
    if (index < num) return 0
    return item
  })
}

const nonPrimeToZero = (arr) => {
  return arr.map(item => {
    if (!isPrime(item)) return 0
    return item
  })
}

const append = (arr, str) => {
  return arr.map(el => {
    return el + str
  })
}

const runOnEachMap = (arr, fun) => {
  return arr.map((item, i) => {
    return fun(item, i)
  })
}

const clone = (arr) => {
  return arr.slice()
}


allFuns.selectiveZero = selectiveZero
allFuns.largestNum = largestNum
allFuns.firstXToZero = firstXToZero
allFuns.allPrime = allPrime
allFuns.increasing = increasing
allFuns.copyArray = copyArray
allFuns.removeElement = removeElement
allFuns.copyWithout = copyWithout
allFuns.copyReverse = copyReverse
allFuns.copyLast = copyLast
allFuns.copyFirst = copyFirst
allFuns.runOnEach = runOnEach
allFuns.onlyIndex = onlyIndex
allFuns.oddToZero = oddToZero
allFuns.firstLetters = firstLetters
allFuns.firstXToZeroMap = firstXToZeroMap
allFuns.nonPrimeToZero = nonPrimeToZero
allFuns.append = append
allFuns.runOnEachMap = runOnEachMap
allFuns.clone = clone


module.exports = allFuns