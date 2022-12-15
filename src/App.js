import './App.css';
import './Components/Navbar/index'
import Navbar from './Components/Navbar';
import Contactbar from './Components/ContactBar';
import Footer from "./Components/Footer"
import Home from './Sections/Home';
import About from './Sections/About';
import Experience from './Sections/Experience';


function App() {
  return (
    <main className="main">
      <Navbar></Navbar>
      <div className='app_section_container'>
        <Home />
        <About />
        <Experience />
      </div>
      <Contactbar></Contactbar>
      <Footer></Footer>
    </main>
    );
}

export default App;
