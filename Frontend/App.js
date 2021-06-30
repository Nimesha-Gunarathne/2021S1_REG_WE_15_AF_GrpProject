import React, { Component } from 'react';
import Payment from './src/components/payment/payment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="App">
                <Payment/>
            </div>
        )
    }

}

export default App;