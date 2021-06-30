import React from 'react';
import './FlipCard.css';
import CardItem from './CardItem';
import galeImg from '../images/im1.png';
import NimeImg from '../images/im2.png';
import SandunikaImg from '../images/im3.png';
import CharithaImg from '../images/im4.png';


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
                                <h1>Jenny Smith</h1>

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
                                <h1>John Woster</h1>

                                <p>Senior Software Engineer</p>
                            </div>
                        </div>
                    </div>


                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={SandunikaImg} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <h1>Paul Harrison</h1>

                                <p>CEO at ABC company</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={CharithaImg} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <h1>Mark Henry</h1>
                                <p>Lecturer Amarican University</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
}


export default Cards;
