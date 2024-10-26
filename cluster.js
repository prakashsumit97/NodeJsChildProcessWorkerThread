const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
    const numCpus = os.cpus().length;
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited. Starting a new worker.`);
        cluster.fork();
    });
} else {
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello from process ${process.pid}`);
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
