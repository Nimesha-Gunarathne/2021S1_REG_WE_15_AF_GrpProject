import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Templates</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/temp.png'
              text='Data science and data driven approaches. '
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/temp.png'
              text='Technology enhanced learning '
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/temp.png'
              text='Autonomous intelligent machines and systems '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/temp.png'
              text='Network services and management '
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/temp.png'
              text='Security and technologies '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
