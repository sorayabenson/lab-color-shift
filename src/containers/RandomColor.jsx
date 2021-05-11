import React, { Component } from 'react';
import ColorCube from '../components/color/ColorCube';

export default class RandomColor extends Component {
    state = {
        color: '#FFD426',
    }

    colorArray = ['#FFD426', '#FEB83A', '#FD9C4F', '#FC8063', '#FB6377', '#FA478C', '#F92BA0'];
    
    shuffle = (array) => {
        //pick random i from array
    }

    handleChange = (e) => {
        //setState with random color from colorArray every second
        newColor = shuffle(colorArray)
        
        this.setState({ color: e.target.newColor })
    }

    render() {
        const { color } = this.state;

        return (
            <div>
                <ColorCube 
                    color={color}
                    onChange={this.handleChange}/>
            </div>
        )
    }
}
