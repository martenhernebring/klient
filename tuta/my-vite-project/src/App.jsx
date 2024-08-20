import { useState } from 'react'
import './App.css'

function App() {
const [key, setKey] = useState("");

  const handleKeyDown = (event) => {
    setKey(event.key);
  }

  return (
    <div className="App">
        <h1>Tuta Jobs</h1>
        {key && <h2>Pressed Key: {key}</h2>}
        <input
            type="text"
            onKeyDown={handleKeyDown}
            placeholder="Press here..."
        />
    </div>
  )
}

export default App
