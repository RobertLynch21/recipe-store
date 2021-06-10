import {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch, connect} from 'react-redux'
import {setCart} from '../redux/cartReducer'

const Cart = (props) => {
    const {cart} = useSelector((store) => store.cartReducer)
    

    useEffect(() => {
        axios.get('/api/cart')
        .then((res) => {
            console.log(res.data)
        })
    }, [])
    return(
        <div>
        <h1>My cart page</h1>
        </div>
    )
}

export default Cart

// const mapStateToProps = (store) => store.cartReducer
// export default connect(mapStateToProps)(cart)

