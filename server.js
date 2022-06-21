const server = require('net').Server();
const END = 'END';
const host = 'localhost';

const error = message => {
  console.error(message);
  process.exit(1);
}

const connnections = new Map();

const sendMessage = (message, origin) => {
  // send message to all users
}

const listen = port => {

  server.on('connection', socket => {
    const user = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`New connection ${user}`);
    socket.setEncoding('utf8');

    socket.on('data', message => {
      if(!connnections.has(socket)){
        console.log(`Username ${message} set for connection ${user}`);
        connnections.set(socket, message);
      } else if (message === END) {
        socket.end();
      } else {
        console.log(`[${user}] -> ${message}`);
      }
    });

    socket.on('close', () => {
      console.log(`${user} logout`);
    });

    socket.on('error', err => error(err.message));
  });

  server.listen(
    { port, host },
    () => console.log(`Listenning on port ${port}`)
  );

  server.on('error', err => error(err.message));
}

const main = () => {
  if (process.argv.length != 3) {
    error(`usage: node ${__filename} port`);
  }

  const port = process.argv[2];
  if (isNaN(port)) {
    error(`Invalid port`);
  }

  listen(Number(port));
}

if (require.main == module) {
  main();
}
