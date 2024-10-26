# NodeJsChildProcessWorkerThread


This page contain the child process in Node js and Worker Thread. How we can create them.

* Child Process 
In Node.js a child process is a way to create new processes within youur application. These Processes can be used to perform tasks concurrently, allowing your Node.js application to handle multiple operation at the same time, which is especially useful for CPU intensive tasks.


Nodejs provided several way to create child processes:-
1) Spwan() - This method lanches a new process with a given comman. It returns a stream that can be used to read from or write to the child process. It's useful when y ou need to deal with large amount of data since it doesn't buffer the output.

2) Exec() - This method is similar to Spawn() but it buffers the output and provide it to a callback function once the process is complete. It's easier to use for smaller outputs.

3) Fork() - This is special case of Spawn() used specifically to create new Node js processes. It spawns a new Node js processes and establishes a communication channel b/w parent and child processes using IPC (Inter process communication).

4) execFile() - similar to exec() but it directly executes a file without using a shell. 
