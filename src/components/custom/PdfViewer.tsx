"use client";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Указываем путь к worker-файлу для pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1); // Текущая страница

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow-lg">
      {/* Область просмотра PDF */}
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          width={window.innerWidth > 768 ? 550 : 360}
        />
      </Document>
      {/* Пагинация */}
      <div className="mt-4 flex items-center justify-center space-x-4">
        <Button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Назад
        </Button>
        <span className="text-gray-700">
          Страница {pageNumber} из {numPages}
        </span>
        <Button onClick={goToNextPage} disabled={pageNumber >= (numPages || 1)}>
          Вперед
        </Button>
      </div>
    </div>
  );
};

export default PdfViewer;
