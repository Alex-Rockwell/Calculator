// six(plus(nine())); 
// должно вернуть 15
// nine(minus(three())); 
// должно вернуть 6
// five(multiply(five())); 
// должно вернуть 25
// eight(split(two())); 
// должно вернуть 4

let plus = (arg) => {
  return ['plus', arg]
}
let minus = (arg) => {
  return ['minus', arg]
}
let multiply = (arg) => {
  return ['multiply', arg]
}
let split = (arg) => {
  return ['split', arg]
}

let act = (num1, arg) => {
  let [action, num2] = [...arg]
  switch (action) {
    case 'plus': 
      return num1 + num2
    case 'minus': 
      return num1 - num2
    case 'multiply': 
      return num1 * num2
    case 'split': 
      return Math.floor(num1 / num2)
  }
}

let one = (arg) => {
  if (!arg) return Number(1) 
  return act(1, arg)
}
let two = (arg) => {
  if (!arg) return Number(2) 
  return act(2, arg)
}
let three = (arg) => {
  if (!arg) return Number(3) 
  return act(3, arg)
}
let four = (arg) => {
  if (!arg) return Number(4) 
  return act(4, arg)
}
let five = (arg) => {
  if (!arg) return Number(5) 
  return act(5, arg)
}
let six = (arg) => {
  if (!arg) return Number(6) 
  return act(6, arg)
}
let seven = (arg) => {
  if (!arg) return Number(7) 
  return act(7, arg)
}
let eight = (arg) => {
  if (!arg) return Number(8) 
  return act(8, arg)
}
let nine = (arg) => {
  if (!arg) return Number(9) 
  return act(9, arg)
}



let res = six(minus(five())); 
let res2 = one(plus(six()))
let res3 = six(split(two()))
console.log(res3)










