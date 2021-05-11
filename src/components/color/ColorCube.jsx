import React from 'react'
import PropTypes from 'prop-types'

const ColorCube = ({ color, onChange }) => {
    return (
        <div 
            style={{ 
                background: color, 
                width: '35rem',
                height: '35rem',
                border: '2px solid black',
            }}
            onChange={onChange}>
        </div>
    )
}

ColorCube.propTypes = {
    color: PropTypes.string.isRequired,
}

export default ColorCube
