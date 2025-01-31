let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesb = names.filter((name) => name.toLowerCase().startsWith('b'))
console.log(namesb)

let namesLength = names.map((name) => name.length)
console.log(namesLength)

console.log(names.reduce((total, name) => total + name.length, 0)/names.length)