# Node.js 2024 - CommonJS vs ES Modules

A guide to understanding module systems in Node.js, URL handling, and CORS configuration.

## File Extensions & Module Systems

| Extension | Module System      | Usage                                                 |
| --------- | ------------------ | ----------------------------------------------------- |
| `.js`     | CommonJS (default) | Default behavior without `package.json` specification |
| `.mjs`    | ES Modules         | Explicitly use ES Modules syntax                      |
| `.cjs`    | CommonJS           | Explicitly use CommonJS syntax                        |

## Package.json Configuration

### Initialize a Node.js project

```bash
npm init
```

### CommonJS (default)

```json
{
  "type": "commonjs"
}
```

Top export a function or variable

```javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

In index.js:

```javascript
const fs = require("fs");
```

### ES Modules

```json
{
  "type": "module"
}
```

```javascript
import http from "http";
```

### Running Your Application

```bash
npm start
```

### Open server on any available port

```javascript
server.listen(0, () => {
  console.log(`Server listening on port: ${server.address().port}`);
});
```

The entry point is automatically configured in `package.json`, so you don't need to specify where the server is located.

## Handling URL Parameters in Vanilla Node.js

### Parsing URL and Query Parameters

```javascript
const urlObj = new URL(req.url, `http://${req.headers.host}`);
const queryObj = Object.fromEntries(urlObj.searchParams);
```

### Checking Routes and Query Parameters

```javascript
if (urlObj.pathname === "/api") {
  // Handle API route
}
```

### Converting Query Parameters

```javascript
const isTrue = JSON.parse(queryObj.isTrue); // Convert string 'true'/'false' to boolean
```

## CORS Configuration

### Enable CORS

```javascript
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
```

**Note:** `'*'` allows requests from any origin. For production, specify allowed origins explicitly.
