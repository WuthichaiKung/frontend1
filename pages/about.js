import Head from 'next/head';
import Link from 'next/link'

export default function About() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8"></meta>
                <title>About</title>
            </Head>
            <main>
                <center>
                    <h1>
                        About
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