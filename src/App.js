import './index.css';
import './App.css';
import Navbar from './compepnets/navbar';
import Intro from './compepnets/Info';
import EducationProjects from './compepnets/projects';
import SkillsActivity from './compepnets/skills';
import Contact from './compepnets/contact';
import UpArrow from './compepnets/upArrow';
import { Fade } from "react-awesome-reveal";

function App() {

  return (
      
        <div className='text-text bg-secondary font-[Nirmala UI] font-semibold overflow-hidden'>
          <Navbar />
          {/* <Fade cascade duration='1200' delay='10'> */}
            <Intro />
          {/* </Fade> */}

          {/* <Fade cascade duration='1200' delay='10'> */}
            <EducationProjects />
          {/* </Fade> */}

          {/* <Fade cascade duration='1200' delay='10'> */}
            <SkillsActivity />
          {/* </Fade> */}

          {/* <Fade cascade duration='1200' delay='10'> */}
            <Contact />
          {/* </Fade> */}

          <UpArrow />
        </div>
    
  );
}

export default App;