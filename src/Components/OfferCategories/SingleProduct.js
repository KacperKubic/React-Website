import { useContext } from 'react';
import { CartContext } from '../../Context';
import { motion } from 'framer-motion';
import { FaCartPlus, FaCartArrowDown } from 'react-icons/fa';


const SingleProduct = ({product}) => {
    const {cart, setCart} = useContext(CartContext)

    return (
        <motion.div initial={{y: 200}} animate={{y:10}} transition={{delay: 0.2, type: 'spring', stiffness: 200}}>
            <div className='product'>
                <div className='imgDiv'><img src={product.image} alt={product.name}></img></div>
                <h3>{product.name}</h3>
                <div className='price'>
                    <p>{product.price.toFixed(2)} PLN</p>
                    {cart.includes(product) ? (
                        <button className='delate' onClick={() => {setCart(cart.filter((cartItem) => cartItem.name !== product.name))}}>
                            <FaCartArrowDown size={30}/>
                        </button>
                        
                    ) : (
                        <button className='add' onClick={()=>{setCart([...cart, product])}}>
                            <FaCartPlus size={30}/>
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default SingleProduct;