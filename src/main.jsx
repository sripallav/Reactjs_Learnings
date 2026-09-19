import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Hello from './hello.jsx'
import Hello1 from './Hello1.jsx'
import Grocesory from './Grocesory.jsx'
import Person from './Person.jsx'
import Menu from './Menu.jsx'
import Product from './Product.jsx'
import StateCount from './StateCount.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App></App>
        <StateCount></StateCount>
    </StrictMode>,
)