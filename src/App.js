import './index.css';
import'./App.css';
import Navbar from './compepnets/navbar';
import Info from './compepnets/Info';
import Skills from './compepnets/skills';
import Projects from './compepnets/projects';
import SideContact from './compepnets/sideContact';

function App() {
  return (
    <>
      <div className='text-white bg-[#0a283b] font-mono'>
        
        <Navbar /> 
        <Info /> 
        <Skills />
        <Projects/>
        <SideContact/>

      </div>
    </>
  );
}

export default App;
