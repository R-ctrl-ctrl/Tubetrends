
import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import styles from '../src/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = (props) => {
  
  return (
    <>
        <nav>
          <div className="logo">
          <Image src="/bolo.png"  width={155} height={125} />
          
          </div>
          <Link href="/">Home</Link>
          <Link href="/videos">videos</Link>
          <Link href="/comparision">comparison</Link>
          <Link href="/channel">channels</Link>
          
        </nav>
    </>
  )
}

export default Navbar