// six(plus(nine())); 
// должно вернуть 15
// nine(minus(three())); 
// должно вернуть 6
// five(multiply(five())); 
// должно вернуть 25
// eight(split(two())); 
// должно вернуть 4

let plus = (arg) => ['plus', arg]
let minus = (arg) => ['minus', arg]
let multiply = (arg) => ['multiply', arg]
let split = (arg) => ['split', arg]

let act = (num1, arg) => {
  let [action, num2] = [...arg]
  switch (action) {
    case 'plus': return num1 + num2
    case 'minus': return num1 - num2
    case 'multiply': return num1 * num2
    case 'split': return Math.floor(num1 / num2)
  }
}

let one = (arg) => !arg ? Number(1) : act(1, arg)
let two = (arg) => !arg ? Number(2) : act(2, arg)
let three = (arg) => !arg ? Number(3) : act(3, arg)
let four = (arg) => !arg ? Number(4) : act(4, arg)
let five = (arg) => !arg ? Number(5) : act(5, arg)
let six = (arg) => !arg ? Number(6) : act(6, arg)
let seven = (arg) => !arg ? Number(7) : act(7, arg)
let eight = (arg) => !arg ? Number(8) : act(8, arg)
let nine = (arg) => !arg ? Number(9) : act(9, arg)

let res = eight(split(two()))
console.log(res)










