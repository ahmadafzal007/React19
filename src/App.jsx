import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Action from 'form_action/actions'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Action />} />
        i
      </Routes>

    </Router>
  )
}

export default App
