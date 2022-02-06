import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
