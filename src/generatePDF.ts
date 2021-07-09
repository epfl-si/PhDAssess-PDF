import latex from 'node-latex'
import fs from 'fs'

export default function generatePDF() {
    const input = fs.createReadStream('src/phdAssess.tex')
    const output = fs.createWriteStream('out/generated_.pdf')

    const options = {}
    /*const options = {
        errorLogs: join(__dirname, 'latexerrors.log') // This will write the errors to `latexerrors.log`
    }*/

    const pdf = latex(input, options)

    pdf.pipe(output)

    pdf.on('error', (err: any) => console.error(err))
    pdf.on('finish', () => console.log('PDF generated!'))
}

generatePDF()
