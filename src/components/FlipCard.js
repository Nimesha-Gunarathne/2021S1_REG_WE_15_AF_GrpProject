import React from 'react';
import './FlipCard.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Keynote Speakers</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="images/gale2.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <h1>Galeee</h1>
                                <p>hello &amp; world</p>
                                <p>Architect</p>
                            </div>
                        </div>
                    </div>

              

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="images/nimesha.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                            <h1>Galeee</h1>
                                <p>hello &amp; world</p>
                                <p>Architect</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="images/sadunika.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                            <h1>Galeee</h1>
                                <p>hello &amp; world</p>
                                <p>Architect</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Cards;
