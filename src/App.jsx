import React from 'react'
import { PDFViewer, Font } from '@react-pdf/renderer'
import { PdfDoc } from './PdfDoc'

export const App = () => {
  return (
    <main>
      <h1>Hello app</h1>
      <PDFViewer width="100%" height="500">
          <PdfDoc />
      </PDFViewer>
    </main>
  )
}