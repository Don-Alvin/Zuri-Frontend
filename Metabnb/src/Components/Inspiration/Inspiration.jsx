import React from 'react'
import classes from './Inspiration.module.css'
import data from '../../data'
import Card from '../UI/Card/Card'


const Inspiration = () => {
  return (

    <section className={classes.inspiration}>
        <div className={classes.inspiration__content}>

          <h1 className={classes.inspiration__header}>
            Inspiration for your next adventure
          </h1>

          <div className={classes.inspiration__images}>
            <Card>
              <img className={classes.image} src={data[0].img} alt="stay one" />
              <div className={classes.inspiration__images_content}>
                <div className={classes.name__price}>
                  <span className={classes.name}>{data[0].title}</span>
                </div> 
              </div>
            </Card>
          </div>

        </div>
    </section>
  )
}

export default Inspiration