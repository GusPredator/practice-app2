import React, { Component } from 'react';
import TheMap from '../Map/Map'

class Page1 extends Component {
    render() {
        return (
            <div>
                <p>Este es el Page1</p>
                <TheMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBwlw6ce7cCHa6V5Pzf4-fs5SskcayUQDA&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}

export default Page1;