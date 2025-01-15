import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import Lenis from 'lenis'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider >
    <RouterProvider router={router}/>
    </HelmetProvider>
  </StrictMode>,
)
