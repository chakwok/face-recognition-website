import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
    <div className='center ma'> 
        <div className='absolute mt2'>
            <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
            <div className='boundBox' style={{ right: box.rightCol, bottom: box.bottomRow, left: box.leftCol, top: box.topRow }}></div>

        </div>
    </div>
);}

export default FaceRecognition;