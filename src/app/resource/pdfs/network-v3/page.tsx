'use client'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PDFPage = () => {
    const [totalPage, setTotalPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setTotalPage(numPages);
    };

    return (
        <div>
            <Document
                file="/xiaolin-network-v3.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {totalPage}</p>
            <button onClick={() => setPageNumber(pageNumber + 1)}>next</button>
        </div>
    );
}

export default PDFPage