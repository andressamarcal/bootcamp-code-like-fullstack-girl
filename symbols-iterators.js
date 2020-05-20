// Symbols
// Usado como maneira de gerar identificador unico, Symbol é IMUTAVEL
// Não pode ser invocado utilizando o NEW

////////////////////////////////////////////////////////////////////////////////

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

// se comparados, são diferentes, pois cada um é como um identificador unico
console.log(uniqueId === uniqueId2);

///////////////////////////////////////////////////////////////////////////////

// Usa-se para criar propriedades privadas também
// getOwnPropertySymbols é usada para adquirir as propriedades de um Symbol


///////////////// method 2 ///////////////

const uniqueId3 = Symbol('Teste');

const obj = {
	[uniqueId3]: 'Iae'
};

//////////////// Well Know Symbols /////////////
// Iterador são passos/coisas para consumir valores do array

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;
	
const arr = [1 ,2, 4, 5];

// tornou o array em  uma função iteradora
const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());