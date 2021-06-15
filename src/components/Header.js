import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to='/'>Home</Link>
            <Link to='/auth'>Login</Link>
            <Link to='/products'>Recipe Page</Link>
            <Link to='/cart'>Checkout</Link>
        </header>
    )
}

export default Header