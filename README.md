## Latex
 
`node --loader ts-node/esm -r dotenv/config ./src/zeebeWorker.ts`

## makePDF

`node --experimental-json-modules --loader ts-node/esm -r dotenv/config --es-module-specifier-resolution=node ./src/buildPDF.js`
