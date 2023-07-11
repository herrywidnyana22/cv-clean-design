import './App.css';
import {TbSquareRoundedCheck, TbBrandStackoverflow, TbWorldCheck, TbDashboard} from 'react-icons/tb'
import Clock from './components/Clock';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Contact from './components/Contact';
import SlideWidget from './components/SlideWidget';

function App() {
  return (
    <div className="main">
        <div className="container">
          <div className="content bordered">
            <div className="main-content">
              <div className="widget widget-big widget-dark">
                <p className='widget-title'>My Skill</p>
                <Skill/>
              </div>
              <div className="widget widget-big">
                <SlideWidget/>
              </div>
              <div className="widget widget-mini">
                <p className='widget-title'>UX / UI</p>
                <div className="widget-content">
                  <span className='checklist-item'>
                    <TbSquareRoundedCheck/>
                    <p>Web Design</p>
                  </span>
                  <span className='checklist-item'>
                    <TbDashboard/>
                    <p>Dashboard Design</p>
                  </span>
                </div>
              </div>
              <div className="widget widget-mini widget-dark">
                <p className='widget-title'>Web Development</p>
                <div className="widget-content">
                  <span className='checklist-item'>
                    <TbBrandStackoverflow/>
                    <p>FullStack Developer</p>
                  </span>
                </div>
              </div>
              <div className="widget widget-mini">
                <p className='widget-title'>Internet of Things</p>
                <div className="widget-content">
                  <span className='checklist-item'>
                    <TbWorldCheck/>
                    <p>Automation Devices</p>
                  </span>
                </div>
              </div>
              <div className="widget widget-medium widget-dark">
              </div>
              <div className="widget widget-medium">
              </div>
              <div className="widget widget-medium widget-dark">
              </div>
              <div className="widget widget-medium">
                <div className="widget-title">Kontak</div>
                <Contact/>
              </div>
            </div>
            <div className="right-content">
              <Clock/>
              <Profile/>
            </div>
          </div>
          <Menu/>
        </div>
    </div>
  );
}

export default App;
