
![Screenshot (30)](https://github.com/Nshravankumar4/login-page/assets/93977456/0c3d399e-915c-4426-90ba-fdcd57f32e6c)
![Screenshot (31)](https://github.com/Nshravankumar4/login-page/assets/93977456/b847b4af-e32b-4867-b105-761fbb31b59e)

if You get the error ?
Microsoft Windows [Version 10.0.19045.4412]
(c) Microsoft Corporation. All rights reserved.

C:\Users\shravannunsavath\Documents\A Project\login-page>node server.js
node:internal/modules/cjs/loader:1148
  throw err;
  ^

Error: Cannot find module 'express'
Require stack:
- C:\Users\shravannunsavath\Documents\A Project\login-page\server.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1145:15)
    at Module._load (node:internal/modules/cjs/loader:986:27)
    at Module.require (node:internal/modules/cjs/loader:1233:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (C:\Users\shravannunsavath\Documents\A Project\login-page\server.js:1:17)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Users\\shravannunsavath\\Documents\\A Project\\login-page\\server.js'
  ]
}

Node.js v20.14.0

C:\Users\shravannunsavath\Documents\A Project\login-page>npm install express body-parser cookie-parser

added 66 packages, and audited 67 packages in 2s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\shravannunsavath\Documents\A Project\login-page>node server.js
Server is running on http://localhost:8080

