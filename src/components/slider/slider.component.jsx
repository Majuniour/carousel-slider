import React, { useState, useEffect } from 'react';
import './slider.styles.scss'

import { CarouselWrapper, prev, next } from 'react-pretty-carousel';

import PrevArrow from '../../assets/arrow-prev.png'
import NextArrow from '../../assets/arrow-next.png'

const Carousel = () => {


    const [items, setItems] = useState(3);

    const slideImages = [
        {
            image: require('../../assets/envelope.png'),
            title: 'Mobile Internet'

        },
        {
            image: require('../../assets/envelope.png'),
            title: 'Home Internet'
        },
        {
            image: require('../../assets/envelope.png'),
            title: 'Get a Device'
        },
        {
            image: require('../../assets/envelope.png'),
            title: 'Mobile Internet'
        },
        {
            image: require('../../assets/envelope.png'),
            title: 'Upgrade'
        }
    ]



    useEffect(() => {
        console.log(slideImages)
        if (window.innerWidth < 576) setItems(1)
        else setItems(5);
        window.addEventListener("resize", () => {
            if (window.innerWidth < 576) setItems(1);
            else setItems(5);
        });
    }, []);

    return (

        <div className='container'>
            <CarouselWrapper items={items} mode="gallery" showControls={false}>
                {slideImages.map((item, i) => (
                    <div key={i} className="carouselWrapper" style={{
                        backgroundColor: `${i === 2 ? '#272727' : '#F5F5F5'}`,

                    }}>

                        <img src={item.image.default} alt={item.title} />
                        <span className="title" style={{ color: `${i === 2 ? '#F5F5F5' : '#272727'}` }}>{item.title}</span>


                    </div>
                ))}

            </CarouselWrapper>
            <div className='nav'>
                <button className="btn" onClick={() => {
                    prev();
                }}> <img src={PrevArrow} alt="left" /></button>
                <button className="btn" onClick={() => {
                    next();
                }}>
                    <img src={NextArrow} alt="left" />
                </button>
            </div>

        </div>
    )
}

export default Carousel;