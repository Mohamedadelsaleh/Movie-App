import React, { useState } from 'react'
import Homes from '../Components/Homes/Homes'
import Trending from '../Components/Trending/Trending'
import Upcomming from '../Components/Upcomming/Upcomming'
import {upcome, latest, recommended} from '../StaticData'

const Home = () => {

    const [items, setItems] = useState(upcome)
    const [item, setItem] = useState(latest)
    const [recommend, setRecommended] = useState(recommended)

    return (
        <>
            <Homes />
            <Upcomming items={items} title='Upcomming Movies' />
            <Upcomming items={item} title='Latest Movies' />
            <Trending />
            <Upcomming items={recommend} title='Recommended Movies' />
        </>
    )
}

export default Home