import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login'; // Import the Login component
import Vegetables from './Components/Vegetables/Vegetables';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fruits from './Components/Fruits/Fruits';
import Grains from './Components/Grains/Grains';
import Register from './Components/Register/Register';
import Farmer from './Components/Farmer/Farmer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Add your other routes as needed */}
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/grains" element={<Grains />} />
          <Route path="/login" element={<Login />} />   
          <Route path="/Farmer" element={<Farmer />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;