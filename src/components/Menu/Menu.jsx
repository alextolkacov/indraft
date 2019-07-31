import React from 'react';
import s from './Menu.module.css'

const Menu = (props) => {
    return (
        <nav>
            <div>
                <a href='/kitchen'>Kitchen</a>
            </div>
            <div>
                <a href='/wardrobe'>Wardrobe</a>
            </div>
            <div>
                <a href='/office'>Office</a>
            </div>
            <div>
                <a href='/other'>Other</a>
            </div>
        </nav>
    )
}

export default Menu