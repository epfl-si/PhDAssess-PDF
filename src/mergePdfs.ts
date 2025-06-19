import {
  PDFDocument
} from "pdf-lib";

export const mergePdfs = async (
  pdf1AsBase64: string,
  pdf2AsBase64: string,
) => {
  const pdfDoc1 = await PDFDocument.load(pdf1AsBase64)
  const pdfDoc2 = await PDFDocument.load(pdf2AsBase64)

  const mergedPdf = await PDFDocument.create()

  const copiedPagesA = await mergedPdf.copyPages(pdfDoc1, pdfDoc1.getPageIndices());
  copiedPagesA.forEach((page) => mergedPdf.addPage(page));

  const copiedPagesB = await mergedPdf.copyPages(pdfDoc2, pdfDoc2.getPageIndices());
  copiedPagesB.forEach((page) => mergedPdf.addPage(page));

  const mergedPdfFile = await mergedPdf.save();

  return Buffer.from(mergedPdfFile).toString('base64')
};
