import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppProvider } from "./context/AppState.jsx";
import ErrorBoundary from './ErrorBoundary.jsx'; // 👈 Add this line

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ErrorBoundary> {/* 👈 Wrap App inside ErrorBoundary */}
        <App />
      </ErrorBoundary>
    </AppProvider>
  </StrictMode>,
);
