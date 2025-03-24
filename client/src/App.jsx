import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import Header from './components/header/Header';
import './App.css'
import Login from './components/login/Login';

function App() {

  return (
    <>
      <div className="bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
