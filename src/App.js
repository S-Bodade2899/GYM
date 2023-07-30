import "./App.css";
import Homepage from "./components/Mainpage/Homepage/Homepage";
import AboutUs from "./components/About Us/aboutUs";
import Classes from "./components/Classes/Classes";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Mainpage/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Mainpage/footer/footer';
// import Register from "./components/Register page/Register";

function App() {
  return (
    <div className="App">
     <Header/>
          <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/blogs" element={<Blogs />} />
          </Routes>
      <Footer/>    
    </div>
  );
}

export default App;

