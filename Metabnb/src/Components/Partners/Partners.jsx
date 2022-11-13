import React from 'react'
import classes from './Partners.module.css'

const Partners = () => {
  return (
    <div className={classes.partners}>
      <img src="../../src/assets/images/mbtoken.svg" alt="mbtoken" />
      <img src="../../src/assets/images/metamask.svg" alt="metamask" />
      <img src="../../src/assets/images/opensea.svg" alt="opensea" />
    </div>
  )
}

export default Partners