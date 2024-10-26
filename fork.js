/**
 * this is special case of spawn() used specifically to create new Node js processes. It spawns a new Node js processes
 * and establishes a communication channel between parent and child processes using IPC (Inter Process communication)
 */

const { fork } = require('child_process');
const child = fork(`child.js`);

child.on('message', (message) => {
    console.log(`Message from child:${message}`)
})


child.send(`Hello from Parent`);

