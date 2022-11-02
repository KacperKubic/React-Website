import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context";
import ListItem from "./OfferCategories/ListItem";
import '../Styles/Cart.css'

const Cart = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        console.log(cart)
        let totalPrice = 0;
        cart.forEach(product => {totalPrice += product.price})
        setTotal(totalPrice);
    }, [cart])

    return (
        <div className='cart'>
            <div className='cartProducts'>
                {cart.map((product, key) => {
                    return <ListItem key={key} product={product}/>
                })}
            </div>
        </div>

    )
}
 
export default Cart;