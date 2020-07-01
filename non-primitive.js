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

allFuns.selectiveZero = selectiveZero
allFuns.largestNum = largestNum
allFuns.firstXToZero = firstXToZero

module.exports = allFuns