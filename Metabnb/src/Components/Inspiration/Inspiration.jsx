import React from 'react'
import classes from './Inspiration.module.css'
import StayCard from '../StayCards/StayCard'


const Inspiration = () => {
  return (

    <section className={classes.inspiration}>
        <div className={classes.inspiration__content}>

          <h1 className={classes.inspiration__header}>
            Inspiration for your next adventure
          </h1>

          <StayCard />

        </div>
    </section>
  )
}

export default Inspiration