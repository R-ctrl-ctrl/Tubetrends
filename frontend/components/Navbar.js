
import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import styles from '../src/styles/Home.module.css'

const Navbar = (props) => {
  const [searchText, setSearchText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(searchText);
    props.onSearch(searchText)
  }

  return (
    <>
        <div>
          <Input placeholder={props.myProp} size='md' onChange={e => setSearchText(e.target.value)} />
          <button className={styles.submitclass} type="submit" onClick={handleSubmit}><img className={styles.imageclass} src="search.png"/></button>
        </div>
    </>
  )
}

export default Navbar