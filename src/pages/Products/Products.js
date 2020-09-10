import React from 'react'
import './Products.css'
import Product from '../../components/Product/Product'
import { v4 as uuidv4 } from 'uuid'

const Products = () => {
    return (
        <div className="home">
            <img src="https://www.inspireinkclothing.com/wp-content/uploads/IMGP4483.jpg" alt="" className="home-image" />
            <div className="home-row">
                <Product
                    id={uuidv4()}
                    title="The Fifth Vital"
                    price={29.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91rTf5TWhkL._AC_UY327_FMwebp_QL65_.jpg" />
                <Product
                    id={uuidv4()}
                    title="Anker PowerCore 10000 Portable Charger, One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More."
                    price={19.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51npXeK2FNL._AC_UY327_FMwebp_QL65_.jpg" />
            </div>
            <div className="home-row">
                <Product
                    id={uuidv4()}
                    title="Sony WH-1000XM4 Wireless Noise Canceling Overhead Black Headphones (2020)"
                    price={349.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY327_FMwebp_QL65_.jpg" />
                <Product
                    id={uuidv4()}
                    title="Nintendo Switch with Gray Joy‑Con - HAC-001(-01)"
                    price={299.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Q+2i8UM5L._AC_UY327_FMwebp_QL65_.jpg" />
                <Product
                    id={uuidv4()}
                    title="Motorola Edge | Unlocked | Made for US by Motorola | 6/256GB | 64MP Camera | 2020 | Solar Black"
                    price={699.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81+mi4ifk2L._AC_UY327_FMwebp_QL65_.jpg" />
            </div>
            <div className="home-row">
                <Product
                    id={uuidv4()}
                    title="TCL 65 Class 6-Series 4K UHD QLED Dolby Vision HDR Roku Smart TV - 65R625"
                    price={798.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91ZrvnzneML._AC_UY327_FMwebp_QL65_.jpg" />
            </div>
        </div>
    )
}

export default Products
