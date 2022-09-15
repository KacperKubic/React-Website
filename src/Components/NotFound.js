import { Link } from 'react-router-dom';
import '../Styles/NotFound.css';

//This component is displayed if user tries to reach route that is not defined in the app.js file
const NotFound = () => {
    return (  
        <div className='notFound'>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Click this to get back to homepage</Link>
        </div>
    );
}
 
export default NotFound;