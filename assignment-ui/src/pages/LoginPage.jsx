import React, { useState } from "react";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import { useAppDispatch } from "../context/AppState.jsx";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");

  // Mock send OTP
  const sendOtp = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setOtpSent(true);
      alert("OTP sent to " + mobile);
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  // Mock validate OTP
  const validateOtp = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      const mockToken = "abcd1234token";
      setToken(mockToken);
      localStorage.setItem("authToken", mockToken);
      dispatch({ type: "SET_TOKEN", payload: mockToken });
      alert("OTP validated! Token saved.");
    } else {
      alert("Invalid OTP. Try 1234.");
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100%", backgroundColor: "#f8f9fa"}}
    >
      <Card className="shadow p-4" style={{ maxWidth: "400px", width: "100%", maxHeight:"90%" }}>
        <h2 className="mb-4 text-center">📱 Login</h2>

        {!otpSent ? (
          <Form onSubmit={sendOtp}>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Send OTP
            </Button>
          </Form>
        ) : (
          <Form onSubmit={validateOtp}>
            <Alert variant="success">OTP sent to {mobile}</Alert>
            <Form.Group className="mb-3">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">
              Validate OTP
            </Button>
          </Form>
        )}

        {token && (
          <Alert variant="info" className="mt-3 text-center">
            ✅ Logged in! Token: {token}
          </Alert>
        )}
      </Card>
    </Container>
  );
};

export default LoginPage;
