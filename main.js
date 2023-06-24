//solicitar ao usuario um ou mais valores inseridos no prompt

let numero = prompt('digite um numero para saber as caracteristicas dele')
console.log(numero)

numero = parseInt(numero)

let parImpar;

//comparar as entradas


// mostrar o resultado por console ou alert de acordo com os valores
// o numero digitado é - este numero é par/impar 
if (numero % 2 === 0) {
    parImpar = ' é par'
} else {
    parImpar = ' é impar'
}
// é maior que maior que 20 é menor que 100
if (numero <= 5) {
    alert('O numero ' + (numero) + (parImpar) + ' e é menor ou igual a 5')
    console.log('O numero ' + (numero) + (parImpar) + ' e é menor ou igual a 5')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 6 && numero <= 10) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 5 e 11')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 5 e 11')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 11 && numero <= 15) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 11 e 16')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 11 e 16')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 16 && numero <= 20) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 15 e 21')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 15 e 21')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 21 && numero <= 25) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 21 e 26')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 21 e 26')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 26 && numero <= 30) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 25 e 31')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 25 e 31')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 31 && numero <= 35) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 31 e 36')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 31 e 36')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 36 && numero <= 40) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 35 e 41')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 35 e 41')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 41 && numero <= 45) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 41 e 46')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 41 e 46')
    alert('Atualize a pagina para digitar um novo numero')
} else if (numero >= 46 && numero <= 50) {
    alert('O numero ' + (numero) + (parImpar) + ' e está entre 45 e 51')
    console.log('O numero ' + (numero) + (parImpar) + ' e está entre 45 e 51')
    alert('Atualize a pagina para digitar um novo numero')
} else {
    console.log('O numero ' + (numero) + (parImpar) + ' e é maior que 50')
    alert('O numero ' + (numero) + (parImpar) + ' e é maior que 50')
    alert('Atualize a pagina para digitar um novo numero')
} 

