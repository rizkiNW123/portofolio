import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card } from 'react-bootstrap';
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import excel from '../assets/excel.png'
import powerbi from '../assets/powerbi.png'
import ppt from '../assets/ppt.png'
import react from '../assets/react.png'
import word from '../assets/word.png'
import sql from '../assets/sql.png'
function Skill() {
  
  return (
    <div id='skill' className='bghome text-white text-center d-flex '>
      <div className='container logo '>
        <h1>SKILL</h1>
        <div className=' logo-slide'>
                <img src={css}/>
                <img src={html}/>
                <img src={javascript}/>
                <img src={python}/>
                <img src={excel}/>
                <img src={powerbi}/>
                <img src={ppt}/>
                <img src={react}/>
                <img src={word}/>
                <img src={sql}/>
        </div>
        <div className=' logo-slide'>
                <img src={css}/>
                <img src={html}/>
                <img src={javascript}/>
                <img src={python}/>
                <img src={excel}/>
                <img src={powerbi}/>
                <img src={ppt}/>
                <img src={react}/>
                <img src={word}/>
                <img src={sql}/>
        </div>
      </div>
    </div>
  );
}
export default Skill;