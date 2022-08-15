import { Link } from 'react-router-dom';
import '../Styles/NotFound.css';

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