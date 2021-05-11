import React, { Component } from 'react';
import ColorCube from '../components/color/ColorCube';

export default class RandomColor extends Component {
    state = {
        color: '#FFD426'
        // surprise: '',
    }

    getRandomColor(array) {
        //pick random i from array
        const randomItem = array[Math.floor(Math.random() * array.length)];

        return randomItem;
    }

    colorShift() {
        //setState with random color from colorArray every second
        const colorArray = ['#FFD426', '#FEB83A', '#FD9C4F', '#FC8063', '#FB6377', '#FA478C', '#F92BA0'];

        // const supriseURL = 'https://en.meming.world/images/en/2/2c/Surprised_Pikachu_HD.jpg';

        const newColor = this.getRandomColor(colorArray);

        // if (newColor === this.state.color) {
        //     this.setState({ color: '#FFFFFF', suprise: surpriseURL })
        // } else {
            // this.setState({ color: newColor, surprise: '' });
        // }
        this.setState({ color: newColor });
    }

    componentDidMount = () => setInterval(() => {
        this.colorShift();
    }, 1500);

    render() {
        const { color } = this.state;

        return (
            <ColorCube 
                color={color} />
        )
    }
}
