import { useContext } from 'react';
import { CartContext } from '../../Context';
import { motion } from 'framer-motion';
import { FaCartPlus, FaCartArrowDown } from 'react-icons/fa';


const ListItem = ({listItem}) => {
    const {cart, setCart} = useContext(CartContext)

    console.log(listItem)

    return (
        <motion.div initial={{y: 200}} animate={{y:10}} transition={{delay: 0.2, type: 'spring', stiffness: 200}}>
        <div className='listItem'>
            <div style={{backgroundImage: `url(${listItem.image})`}}></div>
            <h3>{listItem.name}</h3>
            <div className='price'>
                <p>{listItem.price}PLN</p>
                {cart.includes(listItem) ? (
                    <button className='delate' onClick={() => {setCart.filter((item) => item.id !== listItem.id)}}>
                        <FaCartArrowDown size={30}/>
                    </button>
                    
                ) : (
                    <button className='add' onClick={()=>{setCart([...cart, listItem])}}>
                        <FaCartPlus size={30}/>
                    </button>
                )}
            </div>
        </div>
        </motion.div>
    )
}

export default ListItem;