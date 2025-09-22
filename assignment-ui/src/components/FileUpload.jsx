import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "../context/AppState.jsx";

const FileUpload = () => {
  const dispatch = useAppDispatch();

  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Personal");
  const [selectedSub, setSelectedSub] = useState("");
  const [tags, setTags] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const personalNames = ["John", "Tom", "Emily"];
  const professionalDepts = ["Accounts", "HR", "IT", "Finance"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    const newFile = {
      name: file.name,
      category,
      subCategory: selectedSub,
      tags,
      remarks,
      date: selectedDate.toISOString().split("T")[0],
      type: file.type.includes("image") ? "image" : "pdf",
    };

    // Save in global state
    dispatch({ type: "ADD_FILE", payload: newFile });

    alert("✅ File uploaded (mock). You can find it in Search!");
    setFile(null);
    setTags([]);
    setRemarks("");
    setSelectedSub("");
    setCategory("Personal");
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <Card className="shadow-lg p-4 rounded-4">
        <h3 className="mb-4 text-center">📂 Upload Document</h3>
        <Form onSubmit={handleSubmit}>
          {/* Date Picker */}
          <Form.Group className="mb-3">
            <Form.Label>Select Date</Form.Label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
            />
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSelectedSub("");
              }}
            >
              <option>Personal</option>
              <option>Professional</option>
            </Form.Select>
          </Form.Group>

          {/* Subcategory */}
          <Form.Group className="mb-3">
            <Form.Label>
              {category === "Personal" ? "Name" : "Department"}
            </Form.Label>
            <Form.Select
              value={selectedSub}
              onChange={(e) => setSelectedSub(e.target.value)}
            >
              <option value="">-- Select --</option>
              {category === "Personal"
                ? personalNames.map((n) => <option key={n}>{n}</option>)
                : professionalDepts.map((d) => <option key={d}>{d}</option>)}
            </Form.Select>
          </Form.Group>

          {/* Tags */}
          <Form.Group className="mb-3">
            <Form.Label>Tags (comma separated)</Form.Label>
            <Form.Control
              type="text"
              value={tags.join(", ")}
              onChange={(e) =>
                setTags(e.target.value.split(",").map((t) => t.trim()))
              }
              placeholder="e.g. invoice, tax, 2025"
            />
          </Form.Group>

          {/* Remarks */}
          <Form.Group className="mb-3">
            <Form.Label>Remarks</Form.Label>
            <Form.Control
              type="text"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Add any remarks..."
            />
          </Form.Group>

          {/* File Upload */}
          <Form.Group className="mb-4">
            <Form.Label>Upload File</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf, image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100 fw-bold">
            Upload
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default FileUpload;
