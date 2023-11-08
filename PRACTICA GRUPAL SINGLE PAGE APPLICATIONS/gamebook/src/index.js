import React from 'react';
import { createRoot } from 'react-dom/client';
import { GamebookApp } from './GamebookApp';
import { UserProvider } from './hooks/userContext';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<GamebookApp />);
