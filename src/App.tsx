import { useState } from 'react'
import RouterView, { routetList } from './router'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <div>
      <div className="top">

      </div>
      <RouterView />
    </div>
  )
}

export default App
