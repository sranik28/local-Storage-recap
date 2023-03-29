import React, { useEffect, useState } from 'react';
import SideCard from '../SideCard/SideCard';

const Card = () => {

    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch("/public/data.json")
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])
    return (
        <div>
            {
               card.map(singleCard=><SideCard singleCard={singleCard} key={singleCard.movieName}></SideCard>) 
            }
        </div>
    );
};

export default Card;