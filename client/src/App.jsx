import { Routes, Route } from 'react-router';
import UserProvider from './providers/UserProvider';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import './App.css'
import Catalog from './components/catalog/Catalog';

function App() {
  return (
    <UserProvider>
      <div className="bg-white">
        <Header />
        <main id="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  )
}

export default App
