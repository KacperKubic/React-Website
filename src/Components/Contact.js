import '../Styles/Contact.css';
import ContactImage from '../Images/contact.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('')
    const [emial, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setMessage('')
        alert('Message successfuly sent')
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}> 
            <div className='contact'>
                <div className='leftSide' style={{backgroundImage: `url(${ContactImage})`}}></div>
                <div className='rightSide'>
                    <h1>Contact Us</h1>
                    <form id='contact-form' onSubmit={onFormSubmit}>
                        <label>Full Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter full name...' type='text'/>
                        <label>E-mail</label>
                        <input value={emial} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email...' type='email'/>
                        <label>Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} placeholder='Enter message...' required/>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Contact;