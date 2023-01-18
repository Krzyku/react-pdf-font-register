import React from 'react';
import { Page, Text, View, Document, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Lato',
  src: require(`./Lato-Regular.ttf`).default
  // src: './Lato-Regular.ttf'
})

export const PdfDoc = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text style={{fontFamily: 'Lato'}}>Lorem ipsum dolor sit amet</Text>
        </View>
      </Page>
    </Document>
  )
};
