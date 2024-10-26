const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    // Create a worker thread
    const worker = new Worker(__filename, {
        workerData: { start: 1, end: 100 }
    });

    // Listen for messages from the worker
    worker.on('message', (result) => {
        console.log(`Result from worker: ${result}`);
    });

    // Handle errors
    worker.on('error', (err) => {
        console.error(`Worker error: ${err}`);
    });

    // Handle worker exit
    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });

} else {
    // This code runs inside the worker thread
    const { start, end } = workerData;
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i; // Sum of numbers from start to end
    }

    // Send the result back to the main thread
    parentPort.postMessage(sum);
}
