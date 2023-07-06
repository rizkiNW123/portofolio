import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import {  Card } from 'react-bootstrap';
import profile from '../assets/profile.png'

function Home() {
    return (
        <div id ='home'  className='bghome'>
            <br/>
            <div className='home'>
                
            <Container className='text-white bghome d-flex mb-3'>
                <div className='row container text-center tengah'>
                        <Card.Img className='foto ' src={profile} />
                        <Card.Body>
                        <Card.Text className='mt-3' >
                            <h4>Hello ! </h4>
                            <h2> I'm Rizki Nofrian Wahyudi</h2>
                            <div>
                            Fresh Graduate | Software Engineer | Data Science
                            </div>
                            <button className='shadow-sm text-white bg-dark rounded-2 mt-2 bi-envelope'> </button>
                        </Card.Text>
                        </Card.Body>
                </div>
            </Container>             
            </div>
        </div>
      );       
  }
  
  export default Home;