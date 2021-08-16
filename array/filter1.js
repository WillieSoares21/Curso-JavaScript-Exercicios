const produtos = [
    { nome: 'TV LED 4K', preco: 3499, fragil: true },
    { nome: 'NoteBook Gamer', preco: 8499, fragil: true },
    { nome: 'Espelho de parede', preco: 29.49, fragil: true },
    { nome: 'Balde e plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 700
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))