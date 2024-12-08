# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections. The server starts successfully, but crashes upon receiving a request due to an unhandled rejection within an asynchronous operation.

## Description
The provided `server.js` file includes a simple HTTP server. However, it lacks proper error handling for promises, leading to a crash upon receiving a request.  The `serverSolution.js` file shows how to fix this by implementing proper error handling.

## How to Reproduce
1. Clone this repository.
2. Run `node server.js`.
3. Make a request to `http://localhost:8080` using curl or a web browser.
4. Observe the server crashing with an unhandled promise rejection error.

## Solution
The solution involves using `.catch()` to handle any potential rejections from promises. This prevents the application from crashing and allows for graceful error handling.