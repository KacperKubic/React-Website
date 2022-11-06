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
    const [shippingPrice, setShippingPrice] = useState(0)

    useEffect(()=>{
        let totalPrice = 0;
        cart.forEach(product => {totalPrice += product.price})
        setTotal(totalPrice);
        console.log(shippingPrice)
        console.log(total)

        if(shipping === 'default'){
            if(shippingPrice === 0){
                setTotal(total + 15.99)
                setShippingPrice(15.99)
            }else if(shippingPrice === 24.00){
                setTotal((total - 24.00) + 15.99)
                setShippingPrice(15.99)
            }else if(shippingPrice === 22.49){
                setTotal((total-22.49) + 15.99)
                setShippingPrice(15.99)
            }
        }else if(shipping === 'quick'){
            if(shippingPrice === 0){
                setTotal(total + 24.00)
                setShippingPrice(24.00)
            }else if(shippingPrice === 15.99){
                setTotal((total - 15.99) + 24.00)
                setShippingPrice(24.00)
            }else if(shippingPrice === 22.49){
                setTotal((total-22.49) + 24.00)
                setShippingPrice(24.00)
            }
        }else if(shipping === 'insurance'){
            if(shippingPrice === 0){
                setTotal(total + 22.49)
                setShippingPrice(22.49)
            }else if(shippingPrice === 15.99){
                setTotal((total - 15.99) + 22.49)
                setShippingPrice(22.49)
            }else if(shippingPrice === 24.00){
                setTotal((total-24.00) + 22.49)
                setShippingPrice(22.49)
            }
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