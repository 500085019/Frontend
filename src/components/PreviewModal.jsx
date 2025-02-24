import React from "react";
import Modal from "react-modal";

const PreviewModal = ({ isOpen, onRequestClose }) => {
 // const s3BaseUrl = process.env.REACT_APP_S3_BASE_URL
 // const Pdfurl = s3BaseUrl + "sample.pdf";
 const pdfURL = import.meta.env.VITE_APP_S3_BASE_URL
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Preview Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "60%",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <h2>Preview</h2>
      
      
      
<iframe
  width="100%"
  height="500px"
  src={pdfURL}
  title="PDF Viewer"
  frameBorder="0"
  style={{ border: "1px solid #ccc" }}
></iframe>

      
     
      
      <button
        onClick={onRequestClose}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#3B82F6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default PreviewModal;
