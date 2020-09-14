import React from 'react'
import './Products.css'
import Product from '../../components/Product/Product'
import { v4 as uuidv4 } from 'uuid'

const Products = () => {
    return (
        <div className="home">
            <img src="" alt="" className="home-image" />
            <div className="home-row">
                <Product
                    id={uuidv4()}
                    title="King's X Out Of The Planet Raglan"
                    price={39.99}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0281/2251/3539/products/kgx0015front_1800x1800.jpg?v=1590065919" />
                <Product
                    id={uuidv4()}
                    title="Weird Al Yankovic Dare To Be Stupid Hat"
                    price={25.00}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0281/2251/3539/products/way0030-web_1800x1800.jpg?v=1590067327" />
            </div>
            <div className="home-row">
                <Product
                    id={uuidv4()}
                    title="AC/DC Highway To Hell T-Shirt"
                    price={25.00}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0281/2251/3539/products/acd129F_1800x1800.jpg?v=1598039665" />
                <Product
                    id={uuidv4()}
                    title="Sonata Arctica Talviyo Zip Hoodie"
                    price={48.00}
                    rating={4}
                    image="https://cdn.shopify.com/s/files/1/0281/2251/3539/products/SNA0009-b_1800x1800.jpg?v=1597679178" />
                <Product
                    id={uuidv4()}
                    title="Lacuna Coil Logo Mesh Shorts"
                    price={25.00}
                    rating={4}
                    image="https://cdn.shopify.com/s/files/1/0281/2251/3539/products/lac0034_88711b5a-cd45-4288-b08f-e9c312a92ff6_1800x1800.jpg?v=1590088910" />
            </div>
            <div className="home-row">
                <Product
                    id={uuidv4()}
                    title="Adidas - Core Performance Relaxed Cap - A12"
                    price={35.00}
                    rating={4}
                    image="https://cdn.sportswearcollection.com/Images/Style/1444_fm.jpg" />
            </div>
        </div>
    )
}

export default Products
