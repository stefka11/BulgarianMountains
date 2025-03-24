import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import './App.css'

function App() {

  return (
    <>
      <div className="bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
