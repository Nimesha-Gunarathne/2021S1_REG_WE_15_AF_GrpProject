import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FileUpload from './src/components/fileUpload';
import FilesList from './src/components/fileList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    {/* <div className="container">
                    <div className="main-content"> */}
                    <section>
                        <Switch>
                            <Route component={FileUpload} path="/upload" exact={true} />
                            <Route component={FilesList} path="/download" />
                        </Switch>
                    </section>
                    {/* </div>
                </div> */}
                </BrowserRouter>
            </div>
        )
    }

}

export default App;