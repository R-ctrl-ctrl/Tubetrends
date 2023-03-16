
import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import styles from '../src/styles/Home.module.css'
import Link from 'next/link'

const Navbar = (props) => {
  
  return (
    <>
        <nav>
          <div className="logo">
            <h1>Tubetrends</h1>
          </div>
          <Link href="/">Home</Link>
          <Link href="/comparision">comparison</Link>
          <Link href="/channel">channels</Link>
          
        </nav>
    </>
  )
}

export default Navbar