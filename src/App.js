import './index.css';
import Navbar from './compepnets/navbar';
import Info from './compepnets/Info';
import Skills from './compepnets/skills';

function App() {
  return (
    <>
      <div className='text-white bg-[#0a283b] font-mono'>
        
        <Navbar /> 
        <Info /> 
        <Skills />

      </div>
    </>
  );
}

export default App;
