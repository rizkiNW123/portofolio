import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Contact() {
  
  return  (
    <div className='bghome text-white d-flex '>
      <div className='container  '>
        <h1>Contact</h1>
        <h8>jika anda ingin menghubungi saya, dapat melalui : </h8>
        <br/>
        <a href="https://www.instagram.com/rizkiiiiu/" className='imgc bi bi-instagram'>
        </a>
        <a href="https://wa.me/+6282298824986" className='imgc bi bi-whatsapp'>
        <i class=""></i>
        </a>
        <a href="https://www.linkedin.com/in/rizki-nofrian-wahyudi-955b20241/" className='imgc bi bi-linkedin'>
        <i class=""></i>
        </a>
        <a href="mailto:rizkinofrianw52@gmail.com" className='imgc bi bi-envelope'>
        <i class=""></i>
        </a>
        
      </div>
    </div>

   

  );
}
export default Contact;