import { useContext, useEffect, useState } from 'react';
import { CartContext } from "../Context";
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa'
import SingleProduct from '../Components/OfferCategories/SingleProduct';
import '../Styles/Cart.css'
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState('');

    useEffect(()=>{
        let totalPrice = 0;
        cart.forEach(product => {totalPrice += product.price})
        setTotal(totalPrice);

        if(shipping === 'default'){
            setTotal(total + 15.99)
        }else if(shipping === 'quick'){
            setTotal(total + 24) 
        }else if(shipping === 'insurance'){
            setTotal(total + 22.49)
        }
    }, [cart, shipping])

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}> 
           <div className='cartComponent'>
            <div className='cart'>
                <h1>Shopping cart</h1>
                <hr/>
                <div className='cartProducts'>
                    {cart.length === 0 && <h3>Your cart is empty</h3>}
                    {cart.map((singleProduct, key) => {
                        return <SingleProduct key={key} product={singleProduct}/>
                    })}
                </div>
                <hr/>
            </div>
            <div className='summary'>
                <h1>Summary:</h1>
                <form>
                    <select value={shipping} onChange={(e)=>setShipping(e.target.value)}>
                        <option value="" disabled defaultValue>Select shipping option</option>
                        <option value="default">Default shipping: 15.99 PLN </option>
                        <option value="quick">{`Quick shipping (in your home within 24h): 24.00 PLN`}</option>
                        <option value="insurance">Package with extra insurance: 22.49 PLN</option>
                    </select>
                </form>
                <div>
                    <p>Items in cart: {cart.length}</p>
                    <p>Your total: {total.toFixed(2)} PLN</p>
                </div>
                <Link to='/offer'><FaArrowLeft size={12}/> Back to offer</Link>
            </div>
           </div>
        </motion.div>

    )
}
 
export default Cart;