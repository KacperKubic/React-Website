import { Link } from 'react-scroll';
import './Styles/Location.css';

const Location = () => {
    return ( 
        <div className='location' id='location'>
            <Link to='aboutOffer' spy={true} smooth={true} offsett={50} duration={500}>
                <div className='arrow-up'>
                    <span></span>
                </div>
            </Link>
            <div className='top'>
                <h1>Where to find us?</h1>
                <p>We are located in the center of Warsaw just about 400 meters away from the Palace of Culture and Science and the main train station.</p>
            </div>
            <div className='bottom'>
                <div className='map'><div className='mapouter'><div className='gmap_canvas'><iframe width='900' height='500' id='gmap_canvas' src='https://maps.google.com/maps?q=52.23165833964319,%2021.010865158506377&t=&z=15&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling="no" marginheight='0' marginwidth='0'></iframe></div></div></div>
            </div>
        </div>
     );
}
 
export default Location
