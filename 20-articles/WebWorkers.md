# WebWorkers
v 2024.4.29

- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
- script operation in a background thread
- can't directly manipulate the DOM from inside a worker
- can't use some default methods and properties of the Window object

## Connection
Data is sent between workers and the main thread via a system of messages — both sides send their messages using the `postMessage()` method, and respond to messages via the `onmessage` event.  

When a message is passed between the main thread and worker, it is copied or "transferred" (moved), not shared.  

## Worker types
- Dedicated workers are workers that are utilized by a single script
- Shared workers are workers that can be utilized by multiple scripts
- Service Workers essentially act as proxy servers that sit between web applications, the browser, and the network

## Using Web Workers
```js
// main script

if (window.Worker) {
  // Worker feature detection
}

const myWorker = new Worker('worker.js');

myWorker.onmessage = (event) => {
  const messageRecieved = event.data;
  console.log('Message received from worker', messageRecieved);
};

const myWorkerPostMessage = () => {
    let data = ['myMessage'];
    myWorker.postMessage(data);
};

const myWorkerTerminate = () => {
    myWorker.terminate();
};

```

```js
// worker.js
// inside the worker, the worker is effectively the global scope
onmessage = (event) => {
    console.log("Message received from main script");
    const data = event.data;
    const workerResponse = `Recieved: ${e.data[0]}`;
    console.log("Posting message back to main script");
    postMessage(workerResponse);
};

```
