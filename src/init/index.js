import app from '../app'
import http from 'http'

const port = 3000;
const server = http.createServer(app);

server.listen(port, onListening);
server.on('error', onError);

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	switch (error.code) {
		case 'EACCES':
			console.error('Port ' + port + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error('Port ' + port + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function onListening() {
	const port = server.address().port;
	console.log('Server listening on ' + port);
}
