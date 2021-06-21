var a, b;
a = 3
b = 5

console.log(`before: a = ${a} and b = ${b}`)

a = a * b
b = a / b
a = a / b

console.log(`after: a = ${a} and b = ${b}`)