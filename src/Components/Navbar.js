import { Link } from 'react-router-dom';
import { FaSpider, FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';
import { useState } from 'react';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const closeMenu = () => setToggle(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <h2>Terra Shop</h2>
                    <FaSpider size={30}/>
                </a>
                <div className='toggled' onClick={handleClick}>
                    {toggle ? (<FaTimes size={30} style={{color: '#ffffff'}}/>) : (<FaBars size={30} style={{color: '#ffffff'}}/>)}
                </div>
                <ul className={toggle ? 'nav-links active' : 'nav-links'}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Homepage</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/offer' onClick={closeMenu}>Offer</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/about' onClick={closeMenu}>About us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/contact' onClick={closeMenu}>Contact us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;