import React, { useState } from 'react'
import styles from '../src/styles/Search.module.css'

const Search = (props) => {

  const [searchText, setSearchText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(searchText);
    props.onSearch(searchText)
  }

  return (
    <div className={styles.searchbar}>
      <input className={styles.searchbarinput} placeholder="Enter Youtube Link" size='md' onChange={e => setSearchText(e.target.value)} />
      <button className={styles.submitclass} type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Search