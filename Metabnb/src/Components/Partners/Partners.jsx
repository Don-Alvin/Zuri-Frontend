import React from 'react'
import { images } from '../../Constants'
import classes from './Partners.module.css'

const Partners = () => {
  return (
    <div className={classes.partners}>
      <img src={images.mbtoken} alt="mbtoken" />
      <img src={images.metamask} alt="metamask" />
      <img src={images.opensea} alt="opensea" />
    </div>
  )
}

export default Partners