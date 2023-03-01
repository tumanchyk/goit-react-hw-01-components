import React from 'react';
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import  App  from 'components/App/App';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './index.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
 <App />
  </StrictMode>,
 )

 