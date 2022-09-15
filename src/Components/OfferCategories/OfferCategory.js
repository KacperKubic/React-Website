import { useParams  } from 'react-router';
import ListItem from './ListItem';
import './OfferCategory.css';
import { spiders, reptiles, amphibians, equipment} from './ItemList.js';

const OfferCategory = () => {
    const {category} = useParams();
    return ( 
        <div className='offerCategories'>
            <div className='itemList'>
                {/*Depending of the category that is taken from the page URL with useParams hook 
                it will map through a different array of objects from the ItemList file and display a ListItem component for each of them*/}
                 {category === 'spiders' && spiders.map((listItem, key) => {
                    return <ListItem key={key} image={listItem.image} name={listItem.name} price={listItem.price}/>
                })}
                {category === 'reptiles' && reptiles.map((listItem, key) => {
                    return <ListItem key={key} image={listItem.image} name={listItem.name} price={listItem.price}/>
                })}
                {category === 'amphibians' && amphibians.map((listItem, key) => {
                    return <ListItem key={key} image={listItem.image} name={listItem.name} price={listItem.price}/>
                })}
                {category === 'equipment' && equipment.map((listItem, key) => {
                    return <ListItem key={key} image={listItem.image} name={listItem.name} price={listItem.price}/>
                })}
            </div>
        </div>
     );
}
 
export default OfferCategory;