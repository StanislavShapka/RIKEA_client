import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRouting from './routing/main-routing.tsx'
import {BrowserRouter} from "react-router-dom";

import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
      <MainRouting />
    </BrowserRouter>
  // </StrictMode>,
)
