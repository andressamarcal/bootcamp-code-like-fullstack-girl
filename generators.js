// Generators
// Funções com pausa e elas continuam e retornam valores através de um comando
// o asterisco(*) é muito utilizado para indicar o uso de generetor
// usa-se para construir iteradores


//////// method 1 ///////////

function hello(){

	console.log('Hello');
	//pausa
	yield;
		
	console.log('Fron');
	//pausa
	yield;

	console.log('Function');
	//pausa
	yield;

}

const it = hello();

//itera
console.log(it.next());
//itera
console.log(it.next());
//itera
console.log(it.next());