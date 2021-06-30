import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
  <div>
    <Head>
      <title>หน้าแรก</title>
    </Head>
    <main>
      <center>
        <h1><center>index pages</center></h1>
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