import React from 'react'
import { images } from '../../Constants'
import classes from './NFT.module.css'

const NFT = () => {
  return (
    <section className={classes.nft} id="nft">
      <div className={classes.nft__text}>
        <h1 className={classes.nft__heading}>
          Metabnb NFTs
        </h1>

        <p className={classes.nft__paragraph}>
          Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
        </p>

        <a href="#" className={`${classes.btn} ${classes.btn__nft}`}>
          Learn more
        </a>
      </div>

      <div className={classes.nft__image}>
        <img src={images.nft} alt="nft image" />
      </div>
    </section>
  )
}

export default NFT