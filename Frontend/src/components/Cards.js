import React, { Component } from "react";
import './Cards.css';
import CardItem from './CardItem';
import axios from "axios";
import temp from '../images/temp.png'

class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Approvedconference: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/conference/getApprovedConference')
      .then(response => {
        this.setState({ Approvedconference: response.data.data });
      })
  }

  render() {
    return (
      <div className='cards'>
        <div className="h1Card">Approved Conference</div>

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>

              {this.state.Approvedconference.length > 0 && this.state.Approvedconference.map((item, index) => (
                <CardItem
                  src={temp}
                  text={item.title}
                  label={item.status}
                  path='/approvedconference'
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
