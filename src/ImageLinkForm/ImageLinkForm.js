import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 white'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}

            </p>
        
            <div className='center'>
                <div className='form center pa4 br4 shadow-5'>
                    <input className='w-60 f4 pa2 center' type='text' onChange={onInputChange}/>
                    <button className='w-40 grow f4 link ph3 pv2 dib white bg-light-blue' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
};

export default ImageLinkForm;