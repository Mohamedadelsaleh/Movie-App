import React from 'react'
import { Link } from 'react-router-dom'


const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => {
    return (
        <>
        <div className='box'>
            <div className='coverImage'>
            <img src={cover} alt='' />
            </div>
            <div className='content flex'>
            <div className='details row'>
                <h1>{name}</h1>
                <div className='rating flex'>
                <div className='rate'>
                    <i className='fas fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                </div>
                <label>{rating}(Imdb)</label>
                <span>GP</span>
                <label>{time}</label>
                </div>
                <p>{desc}</p>
                <div className='cast'>
                <h4>
                    <span>Starring </span>
                    {starring}
                </h4>
                <h4>
                    <span>Genres </span>
                    {genres}
                </h4>
                <h4>
                    <span>Tags </span>
                    {tags}
                </h4>
                </div>
                <button className='primary-btn'>
                <i className='fas fa-play'></i> PLAY NOW
                </button>
            </div>
            <div className='palyButton row'>
                <Link to={`/singlepage/${id}`}>
                <button>
                    <div className='img'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/movie-app-889ee.appspot.com/o/icons%2Fplay-button.png?alt=media&token=2cb346b9-0569-4a81-9b9d-c753adf1a04c' alt='' />
                    <img src='https://firebasestorage.googleapis.com/v0/b/movie-app-889ee.appspot.com/o/icons%2Fplay%20(4).png?alt=media&token=68f2f4e2-157b-47ff-9f93-cdf649eed68b' className='change' alt='' />
                    </div>
                    WATCH TRAILER
                </button>
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default HomeCard