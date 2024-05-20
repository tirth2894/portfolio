import './index.css';
import'./App.css';
import Navbar from './compepnets/navbar';
import Info from './compepnets/Info';
import Skills from './compepnets/skills';
import Projects from './compepnets/projects';
import Contact from './compepnets/contact';
import UpArrow from './compepnets/upArrow';

function App() {
  return (
    <>
      <div className='text-white bg-[#0a283b] font-[Nirmala UI] font-semibold'>
        
        <Navbar /> 
        <Info /> 
        <Skills />
        <Projects/>
        <Contact/>
        <UpArrow/>
      </div>
    </>
  );
}

export default App;
