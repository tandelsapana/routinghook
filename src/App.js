import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CEO from './components/CEO';
import CFO from './components/CFO';
import Employees from './components/Employees';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <h1>Understanding Routing Hooks</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="contact" element={<ContactUs/>} />
        <Route path="ceo" element={<CEO/>} />
        <Route path="cfo" element={<CFO/>} />
        <Route path="employees" element={<Employees/>} />
        <Route path="employee/:id/:name" element={<Employee/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
