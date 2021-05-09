import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import AddCandidate from './Pages/AddCandidate';
import Home from './Pages/Home';
import PendingPage from './Pages/PendingPage';
import RefusedPage from './Pages/RefusedPage';
import ConfirmedPage from './Pages/ConfirmedPage';
import ViewDetailsPage from './Pages/ViewDetailsPage';
import { CandidatesCountContextComponent } from './CandidatesCountContext';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <CandidatesCountContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addCandidate' component={AddCandidate} />
                    <Route exact path='/Pending' component={PendingPage} />
                    <Route exact path='/Refused' component={RefusedPage} />
                    <Route exact path='/Confirmed' component={ConfirmedPage} />
                    <Route exact path='/ViewDetails/:id' component={ViewDetailsPage} />
                </Layout>
            </CandidatesCountContextComponent>
        );
    }
}



