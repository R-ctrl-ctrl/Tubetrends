import React from 'react'

const Channel = () => {
  return (
    <div>
          <Input placeholder={props.myProp} size='md' />
          <button className={styles.submitclass} type="submit" onClick={handleSubmit}><img className={styles.imageclass} src="search.png"/></button>
        </div>
  )
}

export default Channel