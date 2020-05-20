// Console

console.log('Black text');
//log de erro com exclamação 
console.warn('Yellow text with alert');
//log de erro vermelho
console.error('Red error text');

// traz informaçoes de onde o codigo foi executado
console.trace();

//agrupamento de mensagens no console
console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My Group');

//acompanha o tempo de execução de uma determinada função
//ajuda a identificar o tempo de execução entre trecho do codigo
console.time('Log Time: ');
setTimeout(() => {
	console.timeEnd('Log Time: ');
}, 2000);

//formata os arrays e objetos no formato tabela 
//melhora visualização
console.table(['Andressa', 'Marçal']);

//espera que a condição seja verdadeira
//caso seja FALSE, ele executa o console
console.assert(1 === 1, 'Ops');

//o CONSOLE LOG é permitido ser ESTILIZADO
console.log('%c styled log', 'color: blue; font-size: 40px');

// se acrescentar o nome debbuging no codigo, o browser irá parar exatamente no local para realizar o debbuging
debbuging()