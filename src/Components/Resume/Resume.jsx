import React, { useEffect, useState } from "react";
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
    <div className="container-sections ">
      <section className="section-resume">
        <Document file={resume} className="resume">
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.7 : 0.6}
            renderTextLayer={false}
          />
        </Document>
        <Download />
      </section>
    </div>
  );
};

const Download = () => {
  const onDownloadClick = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFilePath = "resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfFilePath;

    // Specify the download attribute and file name
    link.download = "yash-avasekar-resume.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <button type="button" onClick={onDownloadClick}>
      Download
    </button>
  );
};

export default Resume;
