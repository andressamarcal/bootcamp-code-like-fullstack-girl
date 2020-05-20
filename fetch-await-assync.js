//Fetch
//substitui o callback

//maneira boa de lidar com as requests
// seu retorno é uma Promise



// ES7 - Async / Await = Cria Promises de maneira mais simples 
// e lida de promises dentro de promises de maneira mais enxuta


const asyncTimer = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(123456);
		}, 1000);
	});

// async ja transforma a função em uma Promise
const simpleFunction = async () => {
	//espera que outras Promises sejam resolvidas
	//aguarda
	//awai so pode ser usada dentro do async
	const data = await asyncTimer(); 
	const dataJson = await fetch('/data.json').then(resStream => {
		resStream.json()
	});
	
	return dataJson;
}

// recebe seu retorno com THEN
simpleFunction()
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);
	});
