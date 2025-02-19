import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/header";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
    <Route path="/" element={<Home/>} key={1}/>
    <Route path="/About" element={<About/>} key={2}/>
    <Route path="/Services" element={<Services/>} key={3}/>
    <Route path="/Contact" element={<Contact/>} key={4}/>
    </Routes>
    </div>
  );
}

export default App;
