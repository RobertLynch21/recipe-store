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
        }).catch(err => console.log(err))
    }, [dispatch])

    const handleDeleteFromCart = (product_id) => {
        axios.delete(`/api/cart/${product_id}`)
        .then((res) => {
            dispatch(setCart(res.data))
        })
        .catch(err => console.log(err))
    }

    const handleChangeQuantity = (product_id, quantity) => {
        if(quantity === 0){
           handleDeleteFromCart(product_id) 
        }else{
            axios.put(`/api/cart/${product_id}`, {quantity: quantity})
            .then((res) => {
                dispatch(setCart(res.data))
            })
            .catch(err => console.log(err))
        }
        
    }

    return(
        <div>
        <h1>My cart page</h1>
        {cart.map((product, i) => {
            return(
                <div key={i}>
                    <h4>{product.product_name}</h4>
                    <h5>Qty: {product.quantity}</h5>
                    <button onClick={() => handleDeleteFromCart(product.product_id)}>Delete Item</button>
                    <button onClick={() => handleChangeQuantity(product.product_id, product.quantity - 1)}>-</button>
                    <button onClick={() => handleChangeQuantity(product.product_id, product.quantity + 1)}>+</button>
                </div>
            )
        })}
        </div>
    )
}

export default Cart

