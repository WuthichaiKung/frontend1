import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />



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
