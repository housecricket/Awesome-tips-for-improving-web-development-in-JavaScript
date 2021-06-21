var a, b;
a = 3
b = 5

console.log(`before: a = ${a} and b = ${b}`)

[a, b] = [b, a]

console.log(`after: a = ${a} and b = ${b}`)