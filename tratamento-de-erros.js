// Tratamento de Erros
// const e let não possuem propriedade de Hosting que nada mais é que usar um print antes de declarar a variavel 

//tratamento de erro tradicional: try catch
// ele mostra o tipo do erro e continua a executar o codigo aonde esta correto

try {
	console.log(name);
	const name = 'Andressa Marçal';
}
//mostra o erro e trata 
catch (err) {
	console.log('O erro foi: ' err);
}
// coloca se quiser o finally..
finally {
console.log('Continua por aqui... ')

}

