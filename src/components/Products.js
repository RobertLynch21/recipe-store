import {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setCart} from '../redux/cartReducer'

const Products = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products')
        .then((res) => {
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleAddToCart = (product_id) => {
        const found = props.cartReducer.cart.find(el => {
            return product_id === el.product_id
        })
        if(!found){
            axios.post(`/api/cart/${product_id}`)
        .then((res) => props.setCart(res.data))
        .catch((err) => console.log(err))
        } else{
            axios.put(`/api/cart/${product_id}`, {quantity: found.quantity + 1})
        .then((res) => {
            setCart(res.data)
        })
        .catch(err => console.log(err))
        }
    }
    return(
        <div>
        <h1>Mrs. Lovett's Recip's</h1>
        {products.map((product) => {
            return (
                <div className="recipe-container" key={product.product_id}>
                    <h4>{product.product_name}</h4>
                    <img src={product.product_image} alt="pictures of food" />
                    <p>{product.product_description}</p>

                    {props.auth.user && <button onClick={() => handleAddToCart(product.product_id)}>Add To Cart</button>}
                
                </div>
            )
        })}
        </div>
    )
}

const mapStateToProps = (store) => store

export default connect(mapStateToProps, {setCart})(Products)