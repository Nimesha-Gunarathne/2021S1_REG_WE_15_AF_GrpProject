import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllResearchPapers from './src/components/viewAllFiles/fileListResearchPapers';
import AllWorkshopProposals from './src/components/viewAllFiles/fileListWorkshopProposals';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <section>
                        <Switch>
                            {/* <Route path="/create-subject" component={CreateSubject} /> */}
                            <Route path="/research" component={AllResearchPapers} />
                            <Route path="/workshop" component={AllWorkshopProposals} />
                        </Switch>
                    </section>
                </Router>
            </div>
        )
    }

}

export default App;