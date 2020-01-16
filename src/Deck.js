import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

class Deck extends Component {
    state = {
            deck: null,
            drawn: []
        }
    
    async componentDidMount(){
        let deck = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
        this.setState({ deck: deck.data});
    }

    getCard = async () => {
        let id = this.state.deck.deck_id;
        let cardURL = `${BASE_URL}${id}/draw/?count=1`;
        //make request using cardURL
        try {
            let cardRes = await axios.get(cardURL);

            if(!cardRes.data.success) {
                throw new Error("No cards remaining!");
            }

            //set state using new card info from api
            let card = cardRes.data.cards[0];
            console.log(card);
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit} `
                    }
                ]
            }));
        } catch (err){
            alert(err);
        }
        
    }

    render() {
        return (
            <div>
                <h1> Card Dealer </h1>
                <button onClick={this.getCard}>Get card!</button>
            </div>
        );
    }
}

export default Deck;

