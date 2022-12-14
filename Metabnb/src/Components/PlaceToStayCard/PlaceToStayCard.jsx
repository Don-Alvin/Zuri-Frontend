import React from 'react'
import classes from './PlaceToStayCard.module.css'
import Card from '../UI/Card/Card'
import { images } from '../../Constants'

const PlaceToStayCard = (props) => {
  return (
    <div className={classes.placetostay__images}>
        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={props.img} alt="stay one" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                    
                <div className={classes.placetostay__images_content}>
                    <div className={classes.name__price}>
                        <span className={classes.name}>{props.title}</span>
                        <span className={classes.price}>{props.price}</span>
                    </div>
                    
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{props.distance}</span>
                        <span className={classes.availabity}>{props.availability}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={props.rating} alt="rating" /></span>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default PlaceToStayCard