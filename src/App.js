import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import { UserProvider } from './context/userContex';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <MainContainer>
          <ToastContainer autoClose={3000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </MainContainer>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
