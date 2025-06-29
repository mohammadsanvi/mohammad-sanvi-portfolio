import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({
  duration: 800,  
  once: true,
  offset: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
