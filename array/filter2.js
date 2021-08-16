Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'TV LED 4K', preco: 3499, fragil: true },
    { nome: 'NoteBook Gamer', preco: 8499, fragil: true },
    { nome: 'Espelho de parede', preco: 29.49, fragil: true },
    { nome: 'Balde e plastico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 700
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))