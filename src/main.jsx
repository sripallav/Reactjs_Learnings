import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './hello.jsx'
import Hello1 from './Hello1.jsx'
import Grocesory from './Grocesory.jsx'
import Person from './Person.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Grocesory />
    <Person name="hari" age={20} />
    <Person name = "pallav" age={22} />

  </StrictMode>,
)
