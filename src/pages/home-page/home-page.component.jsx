import React from 'react';

import Slider from '../../components/slider/slider.component';
import Header from '../../components/header/header.component';

import './home-page.styles.scss'


const HomePage = () => (
    <div>  <Header />
        <div className='containerWrapper'>

            <div><Slider /></div>
        </div>
    </div>
)

export default HomePage;