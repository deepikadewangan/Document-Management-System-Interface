import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppState } from "../context/AppState.jsx";

const FileSearch = () => {
  const { uploadedFiles } = useAppState();

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [tags, setTags] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const personalNames = ["John", "Tom", "Emily"];
  const professionalDepts = ["Accounts", "HR", "IT", "Finance"];

  const handleSearch = () => {
    let results = Array.isArray(uploadedFiles) ? uploadedFiles : [];

    // if (category) results = results.filter((f) => f.category === category);
    // if (subCategory)
    //   results = results.filter((f) => f.subCategory === subCategory);
    // if (tags) {
    //   const tagList = tags.split(",").map((t) => t.trim().toLowerCase());
    //   results = results.filter((f) =>
    //     f.tags.some((t) => tagList.includes(t.toLowerCase()))
    //   );
    // }
    // if (fromDate)
    //   results = results.filter((f) => new Date(f.date) >= new Date(fromDate));
    // if (toDate)
    //   results = results.filter((f) => new Date(f.date) <= new Date(toDate));

    return results;
  };

  console.log("Files in context:", uploadedFiles);
  const results = handleSearch();

  return (
    <Container className="mt-5" style={{ maxWidth: "900px" }}>
      <Card className="shadow-lg p-4 rounded-4 mb-4">
        <h3 className="mb-4 text-center">🔍 Search Documents</h3>
        <Form>
          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubCategory("");
              }}
            >
              <option value="">-- Select Category --</option>
              <option>Personal</option>
              <option>Professional</option>
            </Form.Select>
          </Form.Group>

          {/* Subcategory */}
          {category && (
            <Form.Group className="mb-3">
              <Form.Label>
                {category === "Personal" ? "Name" : "Department"}
              </Form.Label>
              <Form.Select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="">-- Select --</option>
                {category === "Personal"
                  ? personalNames.map((n) => <option key={n}>{n}</option>)
                  : professionalDepts.map((d) => <option key={d}>{d}</option>)}
              </Form.Select>
            </Form.Group>
          )}

          {/* Tags */}
          <Form.Group className="mb-3">
            <Form.Label>Tags (comma separated)</Form.Label>
            <Form.Control
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. invoice, tax, 2025"
            />
          </Form.Group>

          {/* Date Range */}
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>From Date</Form.Label>
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  isClearable
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>To Date</Form.Label>
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  isClearable
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="button" variant="success" className="w-100 fw-bold">
            Search
          </Button>
        </Form>
      </Card>

      {/* Results */}
      <h4 className="mb-3 text-center">📑 Results</h4>
      <Row>
        {results.length === 0 ? (
          <p className="text-center text-muted">No documents found.</p>
        ) : (
          results.map((file, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card className="shadow-sm h-100 rounded-3">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-truncate">{file.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {file.category} → {file.subCategory}
                  </Card.Subtitle>
                  <Card.Text className="flex-grow-1">
                    <strong>Tags:</strong> {file.tags.join(", ")} <br />
                    <strong>Date:</strong> {file.date} <br />
                    <strong>Remarks:</strong> {file.remarks}
                  </Card.Text>
                  <div className="d-flex justify-content-between mt-auto">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => alert("Preview not implemented yet")}
                    >
                      Preview
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => alert("Download not implemented yet")}
                    >
                      Download
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default FileSearch;
