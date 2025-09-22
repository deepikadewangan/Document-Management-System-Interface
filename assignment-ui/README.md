#Document Management System (DMS)

A simple Document Management System built with React.js and React Bootstrap, allowing users to login, upload, and search documents. Admin can create new users. The project uses mock data but is designed to integrate with real APIs (Postman collection provided).

#Features

->Login Page

Users can enter mobile number and OTP (mocked for demo).

Token is stored in localStorage after successful login.

->Dashboard

Navigate to Upload File or Search File page.

*File Upload Page

Upload files (PDF or images).

Select Category (Personal/Professional) and Subcategory (Name/Department).

Add tags, remarks, and select document date.

File metadata saved in global state (mock).

*File Search Page

Filter documents by category, subcategory, tags, and date range.

Displays results in cards with Preview and Download buttons (mock functionality).

->Admin Page

Create new users by entering username and password (mock).

Responsive UI

Uses React Bootstrap for styling.

Modern card designs with shadows and rounded corners.

Tech Stack

Frontend: React.js, React Bootstrap, React Router DOM

State Management: Context API

Date Picker: react-datepicker

Mock APIs: Postman collection provided