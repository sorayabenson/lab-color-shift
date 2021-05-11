import React from 'react';
import PropTypes from 'prop-types';
import style from './ColorCube.css';

const ColorCube = ({ color, surprise }) => {
    return (
        <div 
            style={{ 
                backgroundColor: color,
                backgroundImage: `url(${surprise})`
            }}
            className={style.cube}
        >
        </div>
    )
}

ColorCube.propTypes = {
    color: PropTypes.string.isRequired,
    surprise: PropTypes.string.isRequired
}

export default ColorCube
