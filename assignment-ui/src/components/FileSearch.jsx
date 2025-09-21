import React, { useState } from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import { useAppState } from "../context/AppState.jsx";

const FileSearch = () => {
  const { uploadedFiles } = useAppState();

  const [results, setResults] = useState([]);
  const [previewFile, setPreviewFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(uploadedFiles); // simple mock search
  };

  const handlePreview = (file) => {
    setPreviewFile(file);
    setShowPreview(true);
  };

  const handleDownload = (file) => {
    alert(`Downloading: ${file.name} (mock)`);
  };

  const handleDownloadAll = () => {
    if (results.length === 0) {
      alert("No files to download");
      return;
    }
    alert("Downloading all files as ZIP (mock)");
  };

  return (
    <div className="container mt-4">
      <h3>Search Documents</h3>
      <Form onSubmit={handleSearch} className="mb-3">
        <Button type="submit" variant="success">
          Search
        </Button>
      </Form>

      <div className="mb-3">
        {results.length > 0 && (
          <Button variant="secondary" onClick={handleDownloadAll}>
            Download All as ZIP
          </Button>
        )}
      </div>

      <div>
        {results.length === 0 ? (
          <p>No results yet. Try uploading a file first.</p>
        ) : (
          results.map((file, idx) => (
            <Card key={idx} className="mb-3">
              <Card.Body>
                <Card.Title>{file.name}</Card.Title>
                <Card.Text>
                  <b>Category:</b> {file.category} <br />
                  <b>{file.category === "Personal" ? "Name" : "Department"}:</b>{" "}
                  {file.subCategory} <br />
                  <b>Tags:</b> {file.tags.join(", ")} <br />
                  <b>Date:</b> {file.date} <br />
                  <b>Remarks:</b> {file.remarks}
                </Card.Text>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => handlePreview(file)}
                >
                  Preview
                </Button>
                <Button variant="secondary" onClick={() => handleDownload(file)}>
                  Download
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>

      {/* Preview Modal */}
      <Modal show={showPreview} onHide={() => setShowPreview(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Preview: {previewFile?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {previewFile ? (
            previewFile.type === "pdf" ? (
              <p>[PDF Preview Placeholder] — In real app you’d render PDF here.</p>
            ) : previewFile.type === "image" ? (
              <p>[Image Preview Placeholder] — In real app you’d render image here.</p>
            ) : (
              <p>Preview not supported for this file type.</p>
            )
          ) : (
            <p>No file selected</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FileSearch;
