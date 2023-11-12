/*
API Routes
----------
Lets you create an API endpoint inside a Next.js app. 

-  "req" is an instance of http.IncomingMessage, plus some pre-built middlewares.
- "res" is an instance of http.ServerResponse, plus some helper functions.
*/

// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
