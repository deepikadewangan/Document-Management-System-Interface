import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from 'react';

const LoginPage = () => {

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
      alert("OTP validated! Token saved.");
    } else {
      alert("Invalid OTP. Try 1234.");
    }
  };

  return (
     <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Login</h2>

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
          <Button type="submit" variant="primary">
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
          <Button type="submit" variant="success">
            Validate OTP
          </Button>
        </Form>
      )}

      {token && (
        <Alert variant="info" className="mt-3">
          Logged in! Token: {token}
        </Alert>
      )}
    </div>
  );
};

export default LoginPage;
