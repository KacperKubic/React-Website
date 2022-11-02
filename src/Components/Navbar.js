import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaSpider, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const closeMenu = () => setToggle(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <h2>Terra Shop</h2>
                    <FaSpider size={35}/>
                </a>
                <div className='toggled' onClick={handleClick}>
                    {/*Logic responsible for changing the dropdown menu icon from bars to "x" on mobile devices*/}
                    {toggle ? (<FaTimes size={30} style={{color: '#ffffff'}}/>) : (<FaBars size={30} style={{color: '#ffffff'}}/>)}
                </div>
                {/*If toggle variable is equal to true set className to 'nav-links active', if it is false set it to 'nav-links'*/}
                <ul className={toggle ? 'nav-links active' : 'nav-links'}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenu}>Homepage</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/offer' onClick={closeMenu}>Offer</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' onClick={closeMenu}>About us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' onClick={closeMenu}>Contact us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cart' onClick={closeMenu}><FaShoppingCart size={25}/></Link>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
}
 
export default Navbar;