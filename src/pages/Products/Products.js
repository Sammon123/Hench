import React from 'react'
import './Products.css'
import Product from '../../components/Product/Product'

const Products = () => {
    return (
        <div className="home">
            <img src="https://www.inspireinkclothing.com/wp-content/uploads/IMGP4483.jpg" alt="" className="home-image" />

            <Product
                id="12321341"
                title="The Fifth Vital"
                price={29.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/91rTf5TWhkL._AC_UY327_FMwebp_QL65_.jpg" />
        </div>
    )
}

export default Products
