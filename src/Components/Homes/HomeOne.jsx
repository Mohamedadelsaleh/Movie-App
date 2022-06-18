import React from 'react'
import HomeCard from './HomeCard'

const HomeOne = ({items}) => {
    return (
        <>
            <div className="homeContainer">
                {items.map((item) => 
                    (
                        <HomeCard key={item.id} item={item}/>
                    )
                )}
            </div>
        </>
    )
}

export default HomeOne