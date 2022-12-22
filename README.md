1. yarn init
2. yarn add -D typescript //lib
3. yarn tsc --init // run a script
4. mkdir src
5. yarn tsc // to create a JS file of TS files
6. package.json // do this to not run the line 3.
```json
"scripts": {
    "build":"tsc"
  },
```
7. tsconfig.json uncomment outDir and write dist
```json
"outDir": "dist",
```
8. git init
9. .gitignore
```
node_modules
dist
```
10. yarn add express // add some libs
11. yarn add -D ts-node
12. yarn add -D nodemon
13. mkdir src/index.ts
14.
```typescript
/* eslint-disable linebreak-style */
import express from 'express';

const app = express();

const port = 3002;
app.listen(port,()=>{
  console.log(`Server is runnig:http://localhost:${port}`);
});
```
15. docker run  --name mongo -p 27017:27017 -d mongo:4.4.6
16. yarn add mongoose//pra fazer conxão com mongodb
17. index.ts
 ```typescript
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
        .then(()=>{
          //Só pode se conectar com a api se a conexão com
          //o banco de dados der certo
          const app = express();
          const port = 3002;

          app.listen(port,()=>{
            console.log(`Server is runnig:http://localhost:${port}`);
          });
        })
        .catch(()=>console.log('Erro ao conectar no mongodb'));
```
18. mkdir app/models
19. create the models Category,Order,Product
20.
