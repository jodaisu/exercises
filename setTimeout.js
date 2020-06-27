// 1. Write a function named wait20 that waits 20 seconds and then calls `console.log("one")`.

const wait20 = () => {
  setTimeout(() => {
    console.log("one")
  }, 20000)
}

const oneAndTwo = () => {
  setTimeout(() => {
    console.log("one")

    setTimeout(() => {
      console.log("two")
    }, 10 * 1000)
  
  }, 20 * 1000)
}

const print = (str, i = 0) => {
  if (!str[i]) return
  setTimeout(() => {
    console.log(str[i])
    print(str, i + 1)
  }, 1000)
}

print("hello")