import React from 'react'
import Card from '../UI/Card/Card'

import classes from "./StayCard.module.css"
import data from '../../data'
import { images } from '../../Constants'

const StayCard = () => {
  return (
    <div className={classes.inspiration__images}>
        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[0].img} alt="stay one" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[0].title}</span>
                      <span className={classes.price}>{data[0].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[0].distance}</span>
                        <span className={classes.availabity}>{data[0].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[0].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card>

        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[1].img} alt="stay two" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[1].title}</span>
                      <span className={classes.price}>{data[1].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[1].distance}</span>
                        <span className={classes.availabity}>{data[1].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[1].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card>

        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[2].img} alt="stay three" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[2].title}</span>
                      <span className={classes.price}>{data[0].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[2].distance}</span>
                        <span className={classes.availabity}>{data[2].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[2].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card>

        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[3].img} alt="stay four" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[3].title}</span>
                      <span className={classes.price}>{data[3].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[3].distance}</span>
                        <span className={classes.availabity}>{data[3].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[3].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card>

        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[4].img} alt="stay five" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[4].title}</span>
                      <span className={classes.price}>{data[4].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[4].distance}</span>
                        <span className={classes.availabity}>{data[4].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[4].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card>

        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[5].img} alt="stay six" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[5].title}</span>
                      <span className={classes.price}>{data[5].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[5].distance}</span>
                        <span className={classes.availabity}>{data[5].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[5].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card>

        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[6].img} alt="stay seven" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[6].title}</span>
                      <span className={classes.price}>{data[6].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[6].distance}</span>
                        <span className={classes.availabity}>{data[6].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[6].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card>

        <Card>
            <div className={classes.content_wrapper}>
                <div className={classes.banner}>
                    <img className={classes.image} src={data[7].img} alt="stay eight" />
                    <img className={classes.heart_icon} src={images.heart} />
                </div>
                <div className={classes.inspiration__images_content}>
                    <div className={classes.name__price}>
                      <span className={classes.name}>{data[7].title}</span>
                      <span className={classes.price}>{data[7].price}</span>
                    </div>
                
                    <div className={classes.distance__availability}>
                        <span className={classes.distance}>{data[7].distance}</span>
                        <span className={classes.availabity}>{data[7].availabity}</span>
                    </div>
                    <div className={classes.rating}>
                        <span><img src={data[7].rating} alt="rating" /></span>
                    </div>
                  </div>
            </div>
        </Card> 
    </div>
  )
}

export default StayCard