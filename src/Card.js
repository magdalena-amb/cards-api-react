import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props){
        super(props);
        let angle = Math.random()* 80 - 40;
        let xPos = Math.random()* 40 - 20;
        let yPos = Math.random()* 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    }
    render() {
        //transform: translate(10px, 20px) rotate(20deg);

        const { image, name } = this.props;
        return (
            <img style={ {transform: this._transform} } className='Card' src={ image } alt={name}/>
        )
    }
}

export default Card;