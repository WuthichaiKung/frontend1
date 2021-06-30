import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
const products = () => {
 const router = useRouter()
 const pathData = router.query
 return (
 <div>
    <center> 
     <h1>
     Rroducts Name: {pathData.id}<br/>
     
 </h1>
 </center> 
 <main>
      <center>
        
        <br></br>
        <Link href="/">
          <a>Home</a>
        </Link>
         |
        <Link href="/about">
          <a>About</a>
        </Link>
         |
        <Link href="/service">
          <a>Service</a>
        </Link>
         |
        <Link href="/products/P024">
          <a>Products</a>
        </Link>
        </center>
    </main>
 </div>
 )
}
export default products