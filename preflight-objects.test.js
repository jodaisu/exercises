const fn = require('./preflight-objects.js')

describe('removeCharX function', () => {
  it('should remove the first character', () => {
    const str = "We're in the endgame now."
    const result = fn.removeCharX(str, 0)
    expect(result).toEqual("e're in the endgame now.")
  })
  it('return the original string', () => {
    const str = "a"
    const result = fn.removeCharX(str, 3)
    expect(result).toEqual("a")
  })
  it('return the original string', () => {
    const str = "abc"
    const result = fn.removeCharX(str, -3)
    expect(result).toEqual("abc")
  })
})

describe('less3Diff function', () => {
  it('should return true for difference fewer than 3 chars', () => {
    const str1 = 'spiderman'
    const str2 = 'spyderman'
    const result = fn.less3Diff(str1, str2)
    expect(result).toEqual(true)
  })
  it('should return false for more than 3', () => {
    const str1 = 'spiderman'
    const str2 = 'spyburnum'
    const result = fn.less3Diff(str1, str2)
    expect(result).toEqual(false)
  })
  it('should always return true on strings < 3 characters', () => {
    const result = fn.less3Diff("jk", "lm")
    expect(result).toEqual(true)
  })
})

describe('reverso function', () => {
  it('should return a string reversed', () => {
    const str = 'sneakers'
    const result = fn.reverso(str)
    expect(result).toEqual('srekaens')
  })
  it('should reverse strings of one letter', () => {
    const str = 's'
    const result = fn.reverso(str)
    expect(result).toEqual('s')
  })
  it('should return an empty string when given an empty string', () => {
    const str = ''
    const result = fn.reverso(str)
    expect(result).toEqual('')
  })
})

describe('delayAndCall function', () => {
  jest.useFakeTimers()
  it('function should execute after a number of milliseconds, repeatedly', () => {
    const delay = 1000
    const callback = jest.fn()
    let result = fn.delayAndCall(callback, delay)
    // run the function
    result()
    result()
    // callback hasn't been called at this point
    expect(callback).not.toBeCalled()
    // now setOff fakeTimers
    jest.runAllTimers()
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(2);
    // run to test for the 3rd time
    result()
    jest.runAllTimers()
    expect(callback).toHaveBeenCalledTimes(3);
  })
})

describe('primeMachine function', () => {
  it('should return the next prime number and the next ones after that', () => {
    const getPrime1 = fn.primeMachine(-2)
    expect(getPrime1()).toEqual(2)
    expect(getPrime1()).toEqual(3)
  })
  it('should return the next prime number if input is prime', () => {
    const getPrime1 = fn.primeMachine(3)
    expect(getPrime1()).toEqual(5)
    expect(getPrime1()).toEqual(7)
  })
  it('should return the next 3 primes', () => {
    const getPrime1 = fn.primeMachine(3)
    expect(getPrime1()).toEqual(5)
    expect(getPrime1()).toEqual(7)
    expect(getPrime1()).toEqual(11)
  })
})