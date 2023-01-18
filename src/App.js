import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing';
import ProfilePage from './Pages/Profile';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import { Route, Routes } from 'react-router-dom';
// import LandingClass from './Pages/LandingClass';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
