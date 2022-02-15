import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContex';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import Profile from './pages/User/Profile';
import Dashboard from './pages/cars/Dashboard';
import AddCar from './pages/cars/AddCar';
import EditCar from './pages/cars/EditCar';
import CarDetails from './pages/CarDetails';
import MyVisits from './pages/MyVisits';

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
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/cars/owncars" element={<Dashboard />} />
            <Route path="/cars/add" element={<AddCar />} />
            <Route path="/cars/myvisits" element={<MyVisits />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/cars/edit/:id" element={<EditCar />} />
          </Routes>
        </MainContainer>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
