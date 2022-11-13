import React from 'react'
import classes from './Inspiration.module.css'

const Inspiration = () => {
  return (
    <section className={classes.inspiration}>
        <div className={classes.inspiration__content}>

          <h1 className={classes.inspiration__header}>
            Inspiration for your next adventure
          </h1>

          <div className={classes.inspiration__images}>
          </div>
            
        </div>
    </section>
  )
}

export default Inspiration