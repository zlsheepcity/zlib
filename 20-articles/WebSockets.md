# WebSockets
2024.4.25

- https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
- communication protocol
- http has one direction, websockets have two directions
- usage examples: chatting

## Workflow
1. Opening the Connection «WebSocket handshake request»
2. Establishing the Connection «WebSocket handshake response»
3. Bi-Directional Communication, send messages without the overhead of HTTP headers
4. Closing the Connection, send a close message

## Snippets Frontside
```js

const exampleSocket = new WebSocket(
    'wss://www.example.com/socketserver',
    ['protocolConnectionID'],
);

exampleSocket.close();

exampleSocket.onopen = (event) => {
    const message = 'Onopen message'; // String, Blob, ArrayBuffer
    exampleSocket.send(message);
};

exampleSocket.onmessage = (event) => {
    const recievedMessage = event.data;
    console.log(recievedMessage);
};

function exampleSocketSendObject () {
    const data = {value:1};
    const message = JSON.stringify(data);
    exampleSocket.send(message);
};

// JSON.stringify(data)
// JSON.parse(data)

```

## Serverside options

https://deno.com/  
Deno is the open-source JavaScript runtime for the modern web  
2024.4.25  

```typescript
// server.ts
Deno.serve((_request: Request) => {
  return new Response("Hello, world!");
});
```

```bash
deno run --allow-net server.ts
```

localhost:8000  

