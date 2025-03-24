import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import Header from './components/header/Header';
import './App.css'

function App() {

  return (
    <>
      <div className="bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
