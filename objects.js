const fn = {}


// Preflight
const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2]
}

const firstLongerThan = (arr, num) => {
  return arr.find(item => item.length > num)
}

const getReturnValues = (arr) => arr.map(e => e())

const subArray = (num, arr = []) => {
  if (num === arr.length) return arr
  arr[arr.length] = 0
  return subArray(num, arr)
}

const zeroSquare = (num, res = []) => {
  if (num === res.length) return res
  res[res.length] = subArray(num)
  return zeroSquare(num, res)
}

// Promises under the hood

// const prepareStage = {
//   then: (func) => {
//     func()
//     return prepareStage
//   }
// }

// const performMagic = () => console.log('Abra')

// prepareStage.then(performMagic).then(performMagic).then(performMagic)

const addKV = (obj, key, val) => {
  return obj[key] = val
}

const filterNonKeys = (arr, obj) => {
  return arr.filter(item => obj[item])
}

const addDescription = (char, info) => {
  return char.forEach(item => {
    item.description = info[item.name]
  })
}



fn.mergeArrays = mergeArrays
fn.firstLongerThan = firstLongerThan
fn.getReturnValues = getReturnValues
fn.zeroSquare = zeroSquare
fn.addKV = addKV
fn.filterNonKeys = filterNonKeys
fn.addDescription = addDescription

module.exports = fn

