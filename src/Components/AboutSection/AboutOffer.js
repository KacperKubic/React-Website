import './Styles/AboutOffer.css';
import Delivery from '../../Images/delivery.jpg';
import { Link } from 'react-scroll';

const AboutOffer = () => {
    return ( 
        <div id='aboutOffer' className='aboutOffer'>
            <div className='content'>
                <Link to='aboutUs' spy={true} smooth={true} offset={0} duration={500}>
                    <div className='arrow-up'>
                        <span></span>
                    </div>
                </Link>
                <h1>What do we offer?</h1>
                <p>We sell all kinds of exotic animals such us spiders, snakes and as the only shop in Poland: frogs!
                    We also work with proffesional delivery team that is trained and experienced in delivering leaving animals.
                    Beside that we offer top quality terrariums and other useful equipment.
                </p>
                <Link to='location' spy={true} smooth={true} offset={40} duration={500}>
                    <div className='arrow-down'>
                        <span></span>
                    </div>
                </Link>
            </div>
            <div className='image'>
                <img src={Delivery}/>
            </div>
        </div>
     );
}
 
export default AboutOffer;