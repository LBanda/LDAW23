import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { UserProvider } from './hooks/custom/userContext';
import { ConsultaVJ } from './ConsultaVJ';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ConsultaVJ />);
