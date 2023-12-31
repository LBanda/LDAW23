import React from 'react';
import { createRoot } from 'react-dom/client';
//import { Hooks } from './Hooks';
//import { Contador } from './hooks/state/Contador';
//import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';
//import { Formulario } from './hooks/effect/Formulario';
//import { MultipleCustomHooks } from './hooks/MultipleCustomHooks';
//import { FocusScreen } from './hooks/ref/FocusScreen';
//import { Memoriza } from './hooks/memo/Memoriza';
//import { HookUseMemo } from './hooks/memo/HookUseMemo';
//import { HookCallback } from './hooks/memo/HookCallBack';
import { TodoApp } from './hooks/reducer/TodoApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TodoApp />);
// import('./hooks/reducer/intro-reducer');

