import '../Styles/Offer.css';
import { Link } from 'react-router-dom';
import spiders from '../Images/spiders.jpg';
import reptiles from '../Images/reptiles.jpg';
import amphibians from '../Images/amphibians.jpg';
import equipment from '../Images/equipment.jpg'
import { motion } from 'framer-motion';

const Offer = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
            <div className='offer'>
                {/*This motion div from framer-motion react liblary makes all the divs slide from the bottom to the top of the screen*/}
                <motion.div initial={{y: 200}} animate={{y:10}} transition={{delay: 0.2, type: 'spring', stiffness: 200}}>
                    {/*Four divs that are links to different category page*/}
                    <div className='offerCategory'>
                        <Link to='/category/spiders'>
                            <div className='category'>
                                <div style={{backgroundImage: `url(${spiders})`}}></div>
                                <h2>Spiders</h2>
                            </div>
                        </Link>
                        <Link to='/category/reptiles'>
                            <div className='category'>   
                                <div style={{backgroundImage: `url(${reptiles})`}}></div>
                                <h2>Reptiles</h2>
                            </div>
                        </Link>
                        <Link to='/category/amphibians'>
                            <div className='category'>
                                <div style={{backgroundImage: `url(${amphibians})`}}></div>
                                <h2>Amphibians</h2>
                            </div>
                        </Link>
                        <Link to='/category/equipment'>
                            <div className='category'>
                                <div style={{backgroundImage: `url(${equipment})`}}></div>
                                <h2>Equipment</h2>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.div> 
     );
}
 
export default Offer;