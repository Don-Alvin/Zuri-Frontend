import React from 'react'
import classes from './Partners.module.css'

const Partners = () => {
  return (
    <div className={classes.partners}>
      <img src="../../public/images/mbtoken.svg" alt="mbtoken" />
      <img src="../../public/images/metamask.svg" alt="metamask" />
      <img src="../../public/images/opensea.svg" alt="opensea" />
    </div>
  )
}

export default Partners