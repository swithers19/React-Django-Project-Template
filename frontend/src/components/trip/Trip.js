import React from 'react';
import EdiText from 'react-editext'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DestinationContainer from './DestinationContainer';

export default class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.trip.name,
            startDate: props.trip.startDate,
            endDate: props.trip.endDate
        }
    }

    componentDidMount() {

    }
  
    render() {
      return ( 
        <div class="col-3 card" style={{padding:'0px'}}>
            <img class="card-img-top" src="https://source.unsplash.com/collection/2022043/400x300" alt="Card image cap"></img>
            
            <h5 class="card-title">{this.state.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.startDate} To {this.state.endDate}</h6>
            <Link to={this.state.name}>Say Hello to {this.state.name}</Link>
            <Route path={this.state.name} exact component={DestinationContainer} />

        </div>
      );
    }
  }