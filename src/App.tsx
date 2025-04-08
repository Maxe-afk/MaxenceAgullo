import { BrowserRouter } from "react-router";
import './App.css';
import Navbar from './components/NavBar';
import { Routes, Route } from "react-router";
import Home from './pages/home';
import About from './pages/about';
import Projects from "./pages/projects";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App;
