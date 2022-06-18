import React, { useState } from 'react'
import Homes from '../Components/Homes/Homes'
import Upcomming from '../Components/Upcomming/Upcomming'
import {upcome} from '../StaticData'

const Home = () => {

    const [items, setItems] = useState(upcome)

    return (
        <>
            <Homes />
            <Upcomming items={items} title='Upcomming Movies' />
        </>
    )
}

export default Home