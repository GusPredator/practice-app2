import React, { Component } from 'react';

import '../../Global/css/Components/MenuBar.css'

import datas from './data'

class MenuBar extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="menuElementsContainer">
                    {datas.map(data => <div className="menuElements" key={data.elements.id}><p className="menuElementsText">{data.elements.nombre}</p></div>)}
                </div>
                <div className="userContainer">
                    <div className="userContainerElements">
                        <img 
                            className="userContainerElementsImage"
                            src="https://img.icons8.com/ios/1600/user-male-circle-filled.png" 
                            alt="user"
                        />
                        <p className="userContainerElementsText">Gustavo Sánchez</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default MenuBar;