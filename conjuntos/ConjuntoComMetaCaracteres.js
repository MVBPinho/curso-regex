const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g))
console.log(texto.match(/[$-?]/g))

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [ ] ^ 