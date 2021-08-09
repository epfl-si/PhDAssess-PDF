# PhDAssess-PDF
Microservice in Node to generate PDF for the PhD assess process

## usage
Next take a look on the pdf inside the `/out` folder after you run the test with `npm install && npm test` or build it manually with `ts-node -r dotenv/config ./src/buildPDF.ts`


## tips
- Read all pdf metacontents
  - `exiftool -a -G1 out/makePDF.pdf`
