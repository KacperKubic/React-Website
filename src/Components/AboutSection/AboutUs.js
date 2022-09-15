import { Link } from 'react-scroll';
import './Styles/AboutUs.css';
import aboutUs from '../../Images/aboutUs.jpg';

const AboutUs = () => {
    return ( 
       <div className='aboutUs' id='aboutUs' style={{backgroundImage: `url(${aboutUs})`}}>
        <h1>WHO ARE WE?</h1>
        <p>Terra shop is the biggest exotic animals related shop in Poland and all eastern Europe.
            We have over 10 years of experience on the market and we are working with the most experienced breeders in the industry.
        </p>
        {/*Span styled as an arrow that is a link to another component.
        With the help of react-scroll it smoothy scrolls down the the next component placed below this component*/}
        <Link to='aboutOffer' spy={true} smooth={true} offsett={50} duration={500}>
            <div className='arrow-down'>
                <span></span>
            </div>
        </Link>
       </div>
     );
}
 
export default AboutUs;
