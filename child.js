process.on('message', (message) => {
    console.log(`Message from parent: ${message}`);

    // Send a message back to the parent
    process.send(`Hello from Child`);
});
