import React from 'react'
import { Link } from 'react-router-dom'
import playimg from '../../assets/images/icons/play.png'
import playBTN from '../../assets/images/icons/play.png'
 
const HomeCard = ({item:{id, cover, name, rating, time, desc, starring, genres, tags, video} }) => {
    return (
        <>
            <div className="box">
                <div className="coverImage">
                    <img src={cover} alt="" />
                </div>
                <div className="content flex">
                    <div className="details row">
                        <h1>{name}</h1>
                        <div className="rating flex">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half"></i>
                        </div>
                        <label>{rating}</label>
                        <span>GP</span>
                        <label>{time}</label>
                    </div>
                    <p>{desc}</p>
                    <div className='cast'>
                        <h4>
                            <span>Starring</span>
                            {starring}
                        </h4>
                        <h4>
                            <span>Genres</span>
                            {genres}
                        </h4>
                        <h4>
                            <span>Tags</span>
                            {tags}
                        </h4>
                    </div>
                    <button className="primary-btn">
                        <i className="fa fa-play"></i>PLAY NOW
                    </button>
                    <div className='button row'>
                        <Link to={`/singlepage/${id}`}>
                            <button>
                                <div className='img'>
                                    <img src={playimg} alt='play' />
                                    <img src={playBTN} alt='' />
                                </div>
                                WATCH TRILER
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCard