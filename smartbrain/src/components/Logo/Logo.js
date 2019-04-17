import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
    <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
            <div className="Tilt-inner"> <img style={{paddingTop: '0px'}} alt='logo' src={brain} width='100%' /> </div>
        </Tilt>
    </div>
    )
};

export default Logo;  