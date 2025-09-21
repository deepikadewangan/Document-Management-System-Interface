import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { WithContext as ReactTags } from "react-tag-input";
import { Form, Button } from "react-bootstrap";

const mockNames = ["John", "Tom", "Emily"];
const mockDepartments = ["Accounts", "HR", "IT", "Finance"];
const mockTags = ["Invoice", "Report", "Presentation"];

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const FileUpload = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [category, setCategory] = useState("Personal");
  const [subOptions, setSubOptions] = useState(mockNames);
  const [selectedSub, setSelectedSub] = useState("");
  const [tags, setTags] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [file, setFile] = useState(null);

  // Update sub-options when category changes
  useEffect(() => {
    if (category === "Personal") {
      setSubOptions(mockNames);
    } else {
      setSubOptions(mockDepartments);
    }
    setSelectedSub("");
  }, [category]);

  // Handle tag addition/removal
  const handleDelete = (i) => setTags(tags.filter((tag, index) => index !== i));
  const handleAddition = (tag) => setTags([...tags, tag]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedDate,
      category,
      selectedSub,
      tags: tags.map((t) => t.text),
      remarks,
      file,
    });
    alert("File upload simulated! Check console for details.");
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 border rounded">
      <h3>File Upload</h3>

      {/* Date Picker */}
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="form-control"
        />
      </Form.Group>

      {/* Category Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="Professional">Professional</option>
        </Form.Select>
      </Form.Group>

      {/* Sub Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>{category === "Personal" ? "Name" : "Department"}</Form.Label>
        <Form.Select value={selectedSub} onChange={(e) => setSelectedSub(e.target.value)}>
          <option value="">Select</option>
          {subOptions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Tags Input */}
      <Form.Group className="mb-3">
        <Form.Label>Tags</Form.Label>
        <ReactTags
          tags={tags}
          suggestions={mockTags.map((t) => ({ id: t, text: t }))}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          separators={delimiters}
          inputFieldPosition="bottom"
          autocomplete
        />
      </Form.Group>

      {/* Remarks */}
      <Form.Group className="mb-3">
        <Form.Label>Remarks</Form.Label>
        <Form.Control
          type="text"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Enter remarks"
        />
      </Form.Group>

      {/* File Input */}
      <Form.Group className="mb-3">
        <Form.Label>File</Form.Label>
        <Form.Control
          type="file"
          accept=".pdf,image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Upload
      </Button>
    </Form>
  );
};

export default FileUpload;
