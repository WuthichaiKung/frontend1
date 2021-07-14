import Head from 'next/head'
import Link from 'next/link'
export default function about() {
  return (
  <div>
    <Head>
      <title>เกี่ยวกับเรา</title>
    </Head>
    <main>
        <h1><center>about pages</center></h1>
        <br></br>
        <center>
        
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
         |
        <Link href="/components">
          <a>components</a>
        </Link>
        <br></br>
        </center>  
    </main>
  </div>  
  )
}