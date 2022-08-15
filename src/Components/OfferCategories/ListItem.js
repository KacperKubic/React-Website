import { motion } from 'framer-motion';


const ListItem = ({image, name, price}) => {
    return (
        <motion.div initial={{y: 200}} animate={{y:10}} transition={{delay: 0.2, type: 'spring', stiffness: 200}}>
        <div className='listItem'>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <h3>{name}</h3>
            <p>{price}PLN</p>
        </div>
        </motion.div>
    )
}

export default ListItem;