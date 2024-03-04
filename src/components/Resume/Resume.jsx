import React, { useEffect, useState } from "react";
import "./resume.css";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "./resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="container-section ">
      <section className="section-resume">
        <Document file={resume}>
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.7 : 0.6}
            renderTextLayer={false}
          />
        </Document>
      </section>
    </div>
  );
};

export default Resume;
