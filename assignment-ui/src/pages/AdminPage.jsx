import React, { useState } from "react";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`User "${username}" created (mock)!`);
    setUsername("");
    setPassword("");
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Card className="shadow-lg p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="mb-4 text-center">🛠 Admin - Create User</h2>

        {message && <Alert variant="success" className="text-center">{message}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100 fw-bold">
            Create User
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminPage;
