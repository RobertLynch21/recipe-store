import {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

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
        axios.post(`/api/cart/${product_id}`)
        .then(() => console.log("Success"))
        .catch((err) => console.log(err))
    }
    return(
        <div>
        <h1>This is my Products Page</h1>
        {products.map((product) => {
            return (
                <div key={product.product_id}>
                    <h4>{product.product_name}</h4>
                    <p>{product.product_description}</p>
                    {props.user && <button onClick={() => handleAddToCart(product.product_id)}>Add To Cart</button>}
                
                </div>
            )
        })}
        </div>
    )
}

const mapStateToProps = (store) => store.auth

export default connect(mapStateToProps)(Products)