import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomeFooter from './components/home/HomeFooter'
import HomeMisiones from './components/home/HomeMisiones'
import CardMisiones from './modules/CardMisiones'
import CardMisionesSmall from './modules/CardMisionesSmall'
import DescriptionLevel from './modules/niveles/DescriptionLevel'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
