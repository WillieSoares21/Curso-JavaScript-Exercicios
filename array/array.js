console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Sam', 'Joao', 'Ana')
console.log(aprovados)

aprovados = ['Sam', 'Joao', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Bernardo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafaela'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Sam', 'Joao', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)