import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Switch, Route } from 'react-router-dom'

import './../Global/css/Components/Content.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Login from './Pages/Login';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

import image1 from '../Global/img/carousel1.jpg';
import image2 from '../Global/img/carousel2.jpg';
import image3 from '../Global/img/carousel3.jpg';

class Content extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="carouselContainer">
                    <Carousel
                        className="carouselContainer"
                        showThumbs={false}
                        autoPlay interval={2500} infiniteLoop
                    >
                        <div>
                            <img src={image1} alt="diana" />
                        </div>
                        <div>
                            <img src={image2} alt="arcadia" />
                        </div>
                        <div>
                            <img src={image3} alt="kindred" />
                        </div>
                    </Carousel>
                </div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/page1' component={Page1}/>
                    <Route path='/page2' component={Page2}/>
                </Switch>
            </div>
        )
    }
}

export default Content;