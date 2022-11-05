import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { FaSpider, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import '../Styles/Navbar.css';
import { CartContext } from "../Context";
import { useEffect } from "react";

const Navbar = () => {
    const {cart} = useContext(CartContext);
    const [cartLenght, setCartLenght] = useState(null)

    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const closeMenu = () => setToggle(false);

    useEffect(()=>{
        setCartLenght(cart.length);
    }, [cart])

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
                        {cartLenght === 0 && <Link to='/cart' onClick={closeMenu}><FaShoppingCart size={25}/></Link>}
                        {cartLenght > 0 && <Link to='/cart' onClick={closeMenu}><FaShoppingCart size={25}/>{cartLenght}</Link>}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;