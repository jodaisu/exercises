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


allFuns.selectiveZero = selectiveZero
allFuns.largestNum = largestNum
allFuns.firstXToZero = firstXToZero
allFuns.allPrime = allPrime
allFuns.increasing = increasing

module.exports = allFuns