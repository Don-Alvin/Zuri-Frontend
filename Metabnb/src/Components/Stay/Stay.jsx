import React from 'react'
import { BsFilterSquare } from "react-icons/bs"
import PlaceToStayCard from '../PlaceToStayCard/PlaceToStayCard'
import classes from './Stay.module.css'
import data from '../../data'

const Stay = () => {

  const cards = data.map(card => {
    return (
      <PlaceToStayCard
        img={card.img}
        title={card.title}
        price={card.price}
        distance={card.distance}
        availability={card.availabity}
        rating={card.rating}
      />
    )
  })

  return (
    <main className={classes.main}>
      <div className={classes.stay__content}>
        <div className={classes.header}>
          <div className={classes.categories}>
            <div className={classes.dropdown_menu}>
              <select>
                <option value="Categories">Categories</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Cottage">Cottage</option>
                <option value="Castle">Castle</option>
                <option value="Fantasy City">Fantasy City</option>
                <option value="Beach">Beach</option>
                <option value="Cabins">Cabins</option>
                <option value="Off-grid">Off-grid</option>
                <option value="Farm">Farm</option>
              </select>
            </div>
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
                <div className={classes.filter_icon}>
                  <BsFilterSquare />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          {cards}
        </div>
      </div>
    </main>
  )
}

export default Stay