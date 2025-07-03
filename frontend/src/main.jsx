import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';  // ✅ Import this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>  {/* ✅ Wrap with CookiesProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
