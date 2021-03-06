import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Products = () => {
    const router = useRouter()
    const pathData = router.query
    return(
        <div>
            <head>
                <meta charset="UTF-8"></meta>
                <title>Products</title>
            </head>
            <center>
                <h1>
                    Product ID: {pathData.id}
                    <br/>
                    Prices: {pathData.price}
                </h1>
            </center>
            <main>
                <center>
                    <br/>
                    <Link href="/">
                        <a> Home </a>
                    </Link> |
                    <Link href="about">
                        <a> About Us </a>
                    </Link> |
                    <Link href="services">
                        <a> Services </a>
                    </Link> |
                    <Link href="products/P001">
                        <a> Products </a>
                    </Link> |
                </center>
            </main> 
        </div>
    )
}
export default Products