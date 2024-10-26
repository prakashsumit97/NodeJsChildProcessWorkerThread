/**
 * Spanw() :- this method lanches a new process with a given comman. It return s a stream that can be used to read from or write to the child 
 * progess. Its useful when you need to deal with large amount of data since it doesn't buffer output.
 */
const { spawn } = require("child_process");

const ls = spawn('ls', ['_lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`Output:${data}`);
})

ls.stderr.on('data', (data) => {
    console.error(`Error:${data}`)
})

ls.on('Close', (code) => {
    console.log(`Child Process exited with code ${code}`)
})