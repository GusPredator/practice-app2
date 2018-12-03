import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import './../Global/css/Components/Content.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Content extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="carouselContainer">
                    <Carousel
                        className="carouselContainer"
                        showThumbs={false}
                        autoPlay interval={2000} infiniteLoop
                    >
                        <div>
                            <img src="https://images5.alphacoders.com/802/802067.jpg" alt="diana" />
                        </div>
                        <div>
                            <img src="http://lolwp.com/wp-content/uploads/2012/02/Arcade-Skins-Wallpaper.jpg" alt="arcadia" />
                        </div>
                        <div>
                            <img src="https://images6.alphacoders.com/651/651136.jpg" alt="kindred" />
                        </div>
                    </Carousel>
                </div>
                
                <div className="sectionContainer">
                    <div className="sectionOne">
                        <div className="soButtonsContainer">
                            <button className="soButtons">Aceptar</button>
                            <button className="soButtons">Cancelar</button>
                        </div>
                    </div>
                    <div className="sectionTwo">
                        Y ahora otro poema
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;