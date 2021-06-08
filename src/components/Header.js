import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to='/'>Dashboard</Link>
            <Link to='/auth'>Auth</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>Cart</Link>
        </header>
    )
}

export default Header