import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Initialize Capacitor bridge before React mount
if (window.Capacitor) {
  console.log('Capacitor bridge active:', window.Capacitor.getPlatform());
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
