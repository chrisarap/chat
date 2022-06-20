const server = require('net').Server();
const END = 'END';

server.on('connection', socket => {
  const user = `${socket.remoteAddress}:${socket.remotePort}`;
  console.log(`New connection ${user}`);

  socket.on('data', message => {
    if (message == END) {
      console.log(`${user} logout`);
    } else {
      console.log(`[${user}] -> ${message}`);
    }
  });
});

server.listen(
  { port: 3000, host: 'localhost' },
  () => console.log('Listenning on port 3000')
);