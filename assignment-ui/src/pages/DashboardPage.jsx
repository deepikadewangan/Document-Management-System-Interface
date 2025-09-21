import React from "react";
import FileUpload from "../components/FileUpload";
import FileSearch from "../components/FileSearch";

const DashboardPage = () => {
  return (
    <div className="container mt-3">
      <h2>Dashboard</h2>
      <FileUpload />
      <FileSearch />
    </div>
  );
};

export default DashboardPage;

