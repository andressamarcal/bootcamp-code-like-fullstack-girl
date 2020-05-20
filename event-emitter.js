// EventEmitter
// Programação Assíncrona através de eventos

//para utilizar é preciso importar, ja é nativa no nodejs
const EventEmitter = require('events');


//criando uma classa com events emitter
class Users extends EventEmitter{
	userLogged(data){
		setTimeout(() => {
			this.emit('User Logged', data);
		}, 20000);
	}
}

const users  = new Users();

users.on('User Logged', data => {
	console.log(data);
});

users.userLogged({ user: 'Andressa' });
users.userLogged({ user: 'Marçal' });