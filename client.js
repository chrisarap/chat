const socket = new require('net').Socket();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const END = 'END';

socket.connect({
  port: 3000,
  host: 'localhost'
});

readline.on('line', message => {
  socket.write(message);
  if (message === END) {
    socket.end();
  }
});

socket.on('close', () => {
  process.exit(0);
});