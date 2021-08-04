import Head from 'next/head';
import Link from 'next/link'

export default function Services() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8"></meta>
                <title>Services</title>
            </Head>
            <Head>
                <meta charset="UTF-8"></meta>
                <title>Services</title>
            </Head>
            <main>
                <center>
                    <h1>
                        Services
                    </h1>
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