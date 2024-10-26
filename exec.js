/**
 * This method is similar to Spawn() but it buffers the output and provide it to a callback function once the process 
 * is complete. It's easier to use for smaller outputs.
 */

const { exec } = require('child_process');

exec('ls -ls /usr', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error:${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`Error:${stderr}`);
    }

    console.log(`Stdout:${stdout}`)
})

