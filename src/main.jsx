import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToggleProvider } from './component/contexts/theme'; // <-- make sure path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </StrictMode>
);
