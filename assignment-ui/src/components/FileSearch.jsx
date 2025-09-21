import React, { useState } from "react";
import { Form, Button, Table, Badge } from "react-bootstrap";

// Mock file data
const mockFiles = [
  {
    id: 1,
    name: "Invoice_July.pdf",
    category: "Professional",
    subCategory: "Accounts",
    tags: ["Invoice"],
    date: "2025-09-15",
    type: "pdf",
  },
  {
    id: 2,
    name: "Personal_Photo.png",
    category: "Personal",
    subCategory: "John",
    tags: ["Photo"],
    date: "2025-09-20",
    type: "image",
  },
  {
    id: 3,
    name: "Report_Q2.docx",
    category: "Professional",
    subCategory: "HR",
    tags: ["Report"],
    date: "2025-08-30",
    type: "doc",
  },
];

const FileSearch = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [tags, setTags] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = mockFiles.filter((file) => {
      const matchCategory = category ? file.category === category : true;
      const matchSub = subCategory ? file.subCategory === subCategory : true;
      const matchTags = tags
        ? file.tags.some((t) =>
            t.toLowerCase().includes(tags.toLowerCase())
          )
        : true;
      const matchFrom = fromDate ? new Date(file.date) >= new Date(fromDate) : true;
      const matchTo = toDate ? new Date(file.date) <= new Date(toDate) : true;

      return matchCategory && matchSub && matchTags && matchFrom && matchTo;
    });

    setResults(filtered);
  };

  const handlePreview = (file) => {
    if (file.type === "pdf" || file.type === "image") {
      alert(`Previewing ${file.name}`);
    } else {
      alert(`Cannot preview ${file.name}. Unsupported type.`);
    }
  };

  const handleDownload = (file) => {
    alert(`Downloading ${file.name}...`);
  };

  return (
    <div className="mt-4 p-3 border rounded">
      <h3>File Search</h3>
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-2">
          <Form.Label>Category</Form.Label>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Personal">Personal</option>
            <option value="Professional">Professional</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Name / Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name or Department"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>From Date</Form.Label>
          <Form.Control
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>To Date</Form.Label>
          <Form.Control
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-2">
          Search
        </Button>
      </Form>

      {results.length > 0 && (
        <Table striped bordered hover size="sm" className="mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Tags</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((file) => (
              <tr key={file.id}>
                <td>{file.name}</td>
                <td>{file.category}</td>
                <td>{file.subCategory}</td>
                <td>
                  {file.tags.map((tag, idx) => (
                    <Badge key={idx} bg="secondary" className="me-1">
                      {tag}
                    </Badge>
                  ))}
                </td>
                <td>{file.date}</td>
                <td>
                  <Button
                    size="sm"
                    variant="info"
                    className="me-1"
                    onClick={() => handlePreview(file)}
                  >
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => handleDownload(file)}
                  >
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default FileSearch;
