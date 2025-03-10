import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './i18n';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading Resources.....</div>}>
    <App />
  </Suspense>
);
