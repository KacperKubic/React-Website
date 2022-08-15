import '../Styles/Contact.css';
import ContactImage from '../Images/contact.jpg';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}> 
            <div className='contact'>
                <div className='leftSide' style={{backgroundImage: `url(${ContactImage})`}}></div>
                <div className='rightSide'>
                    <h1>Contact Us</h1>
                    <form id='contact-form' method='POST'>
                        <label>Full Name</label>
                        <input placeholder='Enter full name...' type='text'/>
                        <label>E-mail</label>
                        <input placeholder='Enter email...' type='email'/>
                        <label>Message</label>
                        <textarea rows={6} placeholder='Enter message...' required/>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Contact;