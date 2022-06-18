import React, { useState } from 'react'
import HomeOne from '../Homes/HomeOne'
import './trending.css'
import { trending } from '../../StaticData'

const Trending = () => {

    const [items, setItems] = useState(trending);

    return (
        <>
            <section className="trending">
                <HomeOne items={items} />
            </section>
        </>
    )
}

export default Trending