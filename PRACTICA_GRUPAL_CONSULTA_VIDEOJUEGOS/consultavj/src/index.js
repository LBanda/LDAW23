import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import { VideojuegosApp } from './VideojuegosApp';
import { GameCollectionApp } from './componentes/collection/GameCollectionApp';
const container = document.getElementById('root');
const root = createRoot(container);
//root.render(<VideojuegosApp />);
root.render(<GameCollectionApp/>)
