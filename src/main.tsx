import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from './App.tsx';
import { site } from './data/site';
import { initMetaPixel } from './utils/metaPixel';

initMetaPixel(site.metaPixelId);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
