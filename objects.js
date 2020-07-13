const fn = {}


// Preflight
const mergeArrays = (arr1, arr2) => {
  return [...arr1,...arr2]
}

const firstLongerThan = (arr, num) => {
  return arr.find(item => item.length > num)
}

const getReturnValues = (arr) => arr.map(e => e())

const subArray = (num, arr=[]) => {
  if (num === arr.length) return arr
  arr[arr.length] = 0
  return subArray(num, arr)
}

const zeroSquare = (num, res=[]) => {
  if (num === res.length) return res
  res[res.length] = subArray(num)
  return zeroSquare(num, res)
}

fn.mergeArrays = mergeArrays
fn.firstLongerThan = firstLongerThan
fn.getReturnValues = getReturnValues
fn.zeroSquare = zeroSquare

module.exports = fn

