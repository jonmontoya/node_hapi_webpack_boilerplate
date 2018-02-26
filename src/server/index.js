import Hapi from 'hapi';
import inert from 'inert';
import routes from './routes';

require('babel-polyfill');


const server = Hapi.server({ host: 'localhost', port: 8000 });

async function start() {
  try {
    await server.register(inert);
    server.route(routes);
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}

start();
