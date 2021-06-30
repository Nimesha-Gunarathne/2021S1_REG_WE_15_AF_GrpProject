import React from 'react';
import './FlipCard.css';
import CardItem from './CardItem';
import galeImg from '../images/gale2.jpg';
import NimeImg from '../images/nimesha.jpg';
import SandunikaImg from '../images/sadunika.jpg';
import CharithaImg from '../images/Charitha.jpg';


function Cards() {
    return (
        
        <div className='cards'>
            <div className="h1FC">Keynote Speakers</div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={galeImg} alt="Avatar" style={{ width: '300px', height: '300px' }} />
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
                                <img src={NimeImg} alt="Avatar" style={{ width: '300px', height: '300px' }} />
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
                                <img src={SandunikaImg} alt="Avatar" style={{ width: '300px', height: '300px' }} />
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
                                <img src={CharithaImg} alt="Avatar" style={{ width: '300px', height: '300px' }} />
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
