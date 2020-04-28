import preloader from './../../../assets/Images/Double Ring-1.3s-200px.svg';
import React from 'react';

let Preloader = (props) => {
    return <div>
        <img src={preloader} 
            style={{width:'64px'}} />
    </div>
}

export default Preloader;