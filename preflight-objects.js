const allFuns = {}

const removeCharX = (str, target, result = '', i = 0) => {
  if (i === str.length || i < 0) return result
  if (i === target) return removeCharX(str, target, result, i + 1)
  return removeCharX(str, target, result += str[i], i + 1)
}

const less3Diff = (str1, str2, i = 0, counter = 0) => {
  // if counter > 2 then return false
  if (counter > 2) return false
  // if at the end of string return true
  if (!str1[i]) return true
  // compare each letter. if a mismatch, add counter b 1
  if (str1[i] !== str2[i]) counter += 1
  // return the function
  return less3Diff(str1, str2, i + 1, counter)
}

const reverso = (str, i = str.length - 1, result = '') => {
  if (i < 0) return result
  result += str[i]
  return reverso(str, i - 1, result)
}

const delayAndCall = (fun, delay) => {
  return () => {
    setTimeout(fun, delay)
  }
}

const primeMachine = (input) => {
  let i = input
  const inner = () => {
    const isPrime = (num, i = 2) => {
      if (i === num) return true
      if (Math.abs(num) === 1 || num % i === 0) {
        return false
      }
      return isPrime(num, i + 1)
    }
    i += 1
    if (isPrime(i) === true) {
      return i
    }
    return inner()
  }
  return inner
}


allFuns.removeCharX = removeCharX
allFuns.less3Diff = less3Diff
allFuns.reverso = reverso
allFuns.delayAndCall = delayAndCall
allFuns.primeMachine = primeMachine

module.exports = allFuns