import AboutOffer from "./AboutSection/AboutOffer";
import AboutUs from "./AboutSection/AboutUs";
import Location from "./AboutSection/Location";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
            {/*Div containing three componens creating the entire about section*/}
            <div className='about'>
                <AboutUs/>
                <AboutOffer/>
                <Location/>
            </div>
        </motion.div>
     );
}
 
export default About;