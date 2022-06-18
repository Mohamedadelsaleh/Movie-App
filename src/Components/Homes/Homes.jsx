import React, { useState } from 'react'
import {homeData} from '../../StaticData'
import HomeOne from './HomeOne';
import './Homes.css'

const Homes = () => {
    
    const [items, setItems] = useState(homeData);
    
    return (
        <>
            <section className="home">
                <HomeOne items={items} />
            </section>
            <div className="margin">

            </div>
        </>
    )
}

export default Homes