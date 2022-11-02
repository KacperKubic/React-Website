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
                    return <ListItem key={key} listItem={listItem}/>
                })}
                {category === 'reptiles' && reptiles.map((listItem, key) => {
                    return <ListItem key={key} listItem={listItem}/>
                })}
                {category === 'amphibians' && amphibians.map((listItem, key) => {
                    return <ListItem key={key} listItem={listItem}/>
                })}
                {category === 'equipment' && equipment.map((listItem, key) => {
                    return <ListItem key={key} listItem={listItem}/>
                })}
            </div>
        </div>
     );
}
 
export default OfferCategory;