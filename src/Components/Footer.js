import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='socials'>
                <a href='https://www.facebook.com'><FaFacebook/></a>
                <a href='https://www.instagram.com'><FaInstagram/></a>
                <a href='https://www.tiktok.com'><FaTiktok/></a>
            </div>
        </div>
     );
}
 
export default Footer;