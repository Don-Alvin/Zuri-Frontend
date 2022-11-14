import React from 'react'
import { BsFilterSquare } from "react-icons/bs"
import PlaceToStayCard from '../PlaceToStayCard/PlaceToStayCard'
import StayCard from '../StayCards/StayCard'
import classes from './Stay.module.css'

const Stay = () => {
  return (
    <main className={classes.main}>
      <div className={classes.header}>

        <div className={classes.categories}>

          <ul className={classes.categories__list}>

            <li className={classes.categories__item}>
              <a href="">Restaurant</a>
            </li>

            <li className={classes.categories__item}>
              <a href="">Cottage</a>
            </li>

            <li className={classes.categories__item}>
              <a href="">Castle</a>
            </li>

            <li className={classes.categories__item}>
              <a href="">Fantasy City</a>
            </li>

            <li className={classes.categories__item}>
              <a href="">Beach</a>
            </li>

            <li className={classes.categories__item}>
              <a href="">Cabins</a>
            </li>

            <li className={classes.categories__item}>
              <a href="">Off-grid</a>
            </li>

            <li className={classes.categories__item}>
              <a href="">Farm</a>
            </li>

          </ul>

          <div className={classes.filter}>
            <a href="">
              <span>Locations</span>
              <BsFilterSquare />
            </a>
          </div>

        </div>
      </div>

      <div className={classes.content}>
        <PlaceToStayCard />
      </div>
    </main>
  )
}

export default Stay