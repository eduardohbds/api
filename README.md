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
