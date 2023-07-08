const texto = 'Casa bonita é casa amarela da esquina com a rua ACASALAR.'

const regex = /casa/
console.log(texto.match(regex))

const regex1 = /casa/gi
console.log(texto.match(regex1))
console.log(texto.match(/a b/))