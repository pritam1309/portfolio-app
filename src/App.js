// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  <img src="untitled design.png" alt="portfolio"></img>
  return (
    <div>
      <div>
      <Navbar/>
      <img src={require('./Untitleddesign.png')} alt="portfolio" className='img'/>
      <img src={require('./photo.png')} alt="portfolio" className='pic'/>
      <div className='intro'>
        <h5 className='intro'>Hello, I am</h5>
        <h3 className='intro'>Pritam</h3>
        <p className='intro'>I am a Student | Web devloper | programmer</p>
      </div>
      </div>
      <div className='logoo'>
      <img src={require('./me.png')} alt="not supported"  className="logoo"/>
      </div>
      <About/>
      <img src={require('./skills2.png')} alt="not supported"  className="skill"/>
      <Skills/>
      <Contact/> 
    </div>
  );
}

export default App;
