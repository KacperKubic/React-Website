import '../Styles/Home.css';
import BackgroundImage from '../Images/background.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return ( 
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
            <div className='homePage' style={{backgroundImage: `url(${BackgroundImage})`}}>
                <div className='homePage-content'>
                    <h1>Terra Shop</h1>
                    <p>Exotic animals? Professional equipment?</p>
                    <p>We got that all!</p>
                    <Link to='/offer'>
                        <button className='button'>SEE OUR OFFER</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Home;