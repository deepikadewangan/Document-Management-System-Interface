import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useAppDispatch } from "../context/AppState.jsx";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate OTP (API call)
  const sendOtp = async (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://apis.allsoft.co/api/documentManagement/generateOTP",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile_number: mobile }),
        }
      );

      if (!response.ok) throw new Error("Failed to send OTP");

      setOtpSent(true);
      alert("OTP sent successfully to " + mobile);
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    } finally {
      setLoading(false);
    }
    

  };

  // Validate OTP (API call)
  const validateOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "https://apis.allsoft.co/api/documentManagement/validateOTP",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile_number: mobile, otp }),
        }
      );

      if (!response.ok) throw new Error("Invalid OTP");

      const data = await response.json();
      const userToken = data?.token || "dummyToken"; // fallback in case API doesn’t send token

      setToken(userToken);
      localStorage.setItem("authToken", userToken);
      dispatch({ type: "SET_TOKEN", payload: userToken });

      alert("OTP validated! Token saved.");
    } catch (err) {
      console.error(err);
      alert("Invalid OTP or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <div
        className="p-4 shadow rounded bg-white"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>

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
            <Button type="submit" variant="primary" disabled={loading} className="w-100">
              {loading ? <Spinner animation="border" size="sm" /> : "Send OTP"}
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
            <Button type="submit" variant="success" disabled={loading} className="w-100">
              {loading ? <Spinner animation="border" size="sm" /> : "Validate OTP"}
            </Button>
          </Form>
        )}

        {token && (
          <Alert variant="info" className="mt-3">
            ✅ Logged in! Token: {token}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
