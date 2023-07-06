import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import sql from '../assets/sql.png'
function Portofolio() {
  return (
    <div  id='contact' className='text-white bg-dark d-flex text-center'>
      <div className='container text-white m-3 '>
        <h1 className='text-center'> Portofolio</h1>
          <Card style={{ width: '18rem' }}>
            <Card.Img  src={sql} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
      </div>
    </div>
  );
}

export default Portofolio;