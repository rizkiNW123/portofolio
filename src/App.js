import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Head from './component/navbar';
import Home from './component/home';
import Skill from './component/skill';
import About from './component/about';
import Portofolio from './component/portofolio';
import Contact from './component/contact'
function App() {
  return (
    <>
    <div>
      <Head/>
      <Home/>
      <About/>
      <Skill/>
      <Portofolio/>
      <Contact/>
      
    </div>
      
    </>
    
  );
}

export default App;