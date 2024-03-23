import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
        <Menu />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
