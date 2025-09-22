import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUpload, FaSearch } from "react-icons/fa";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = React.useState(null);

  const cardStyle = {
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    borderRadius: "15px",
  };

  const cardHover = {
    transform: "scale(1.08)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      }}
    >
      <Container>
        <Row className="g-4 justify-content-center">
          {/* Upload File Card */}
          <Col xs={12} md={5}>
            <Card
              className="text-center p-5 text-white"
              style={hovered === "upload" ? { ...cardStyle, ...cardHover, backgroundColor: "#4e73df" } : { ...cardStyle, backgroundColor: "#5a95f5" }}
              onClick={() => navigate("/upload")}
              onMouseEnter={() => setHovered("upload")}
              onMouseLeave={() => setHovered(null)}
            >
              <FaUpload size={60} className="mb-3" />
              <h2>Upload File</h2>
              <p>Click here to upload new documents</p>
            </Card>
          </Col>

          {/* Search File Card */}
          <Col xs={12} md={5}>
            <Card
              className="text-center p-5 text-white"
              style={hovered === "search" ? { ...cardStyle, ...cardHover, backgroundColor: "#28a745" } : { ...cardStyle, backgroundColor: "#3ccf4f" }}
              onClick={() => navigate("/search")}
              onMouseEnter={() => setHovered("search")}
              onMouseLeave={() => setHovered(null)}
            >
              <FaSearch size={60} className="mb-3" />
              <h2>Search File</h2>
              <p>Click here to search and view documents</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
