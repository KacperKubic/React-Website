import { useParams  } from 'react-router';
import SingleProduct from './SingleProduct';
import './OfferCategory.css';
import { spiders, reptiles, amphibians, equipment} from './ProductList';

const OfferCategory = () => {
    const {category} = useParams();
    return ( 
        <div className='offerCategories'>
            <div className='itemList'>
                {/*Depending of the category that is taken from the page URL with useParams hook 
                it will map through a different array of objects from the ItemList file and display a ListItem component for each of them*/}
                 {category === 'spiders' && spiders.map((singleProduct, key) => {
                    return <SingleProduct key={key} product={singleProduct}/>
                })}
                {category === 'reptiles' && reptiles.map((singleProduct, key) => {
                    return <SingleProduct key={key} product={singleProduct}/>
                })}
                {category === 'amphibians' && amphibians.map((singleProduct, key) => {
                    return <SingleProduct key={key} product={singleProduct}/>
                })}
                {category === 'equipment' && equipment.map((singleProduct, key) => {
                    return <SingleProduct key={key} product={singleProduct}/>
                })}
            </div>
        </div>
     );
}
 
export default OfferCategory;