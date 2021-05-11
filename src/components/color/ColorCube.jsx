import React from 'react';
import PropTypes from 'prop-types';
import style from './ColorCube.css';

const ColorCube = ({ color }) => {
    return (
        <div 
            style={{ 
                background: color
            }}
            className={style.cube}
        >
        </div>
    )
}

ColorCube.propTypes = {
    color: PropTypes.string.isRequired
}

export default ColorCube
