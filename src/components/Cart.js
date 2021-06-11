import {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch, connect} from 'react-redux'
import {setCart} from '../redux/cartReducer'

const Cart = (props) => {
    const {cart} = useSelector((store) => store.cartReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        axios.get('/api/cart')
        .then((res) => {
            console.log(res.data)
            dispatch(setCart(res.data))
        })
    }, [])
    return(
        <div>
        <h1>My cart page</h1>
        {cart.map((product) => {
            return(
                <div key={product.product_id}>
                    <h4>{product.product_name}</h4>
                    <h5>{product.quantity}</h5>
                </div>
            )
        })}
        </div>
    )
}

export default Cart

