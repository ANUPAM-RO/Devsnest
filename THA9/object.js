const calculator = {
    name: "Addition Calculator",
    add: (a,b) => {    
        console.log(a+b)
       
    }
}

const calc = {
    name: "subtraction Calculator",
    sub: (a,b) => {
        console.log(a-b)
    }
}
calculator.add.call(calc,8,5)
calc.sub.call(calculator,30,50)
calculator.add.apply(calc,[25,30])
calc.sub.apply(calculator,[50,10])
const addition = calculator.add.bind(calculator,20,30)
const subtraction = calc.sub.bind(calc,20,5)
addition()
subtraction()