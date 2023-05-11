# PhDAssess-PDF
Microservice in Node to generate PDF for the PhD assess process

## usage
- `npm i`

### Test a PDF generation
- `npm run generate-local-pdf`
- take a look on the pdf inside the `/out` folder

### Start the zeebe worker locally
- `npm start`

## Howto
### Read the generated PDF meta-contents after the test command
  - Use `exiftool -a -G1 out/makePDF.pdf`
