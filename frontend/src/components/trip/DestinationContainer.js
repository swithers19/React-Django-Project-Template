import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../apiConfig';

export default class DestinationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
        tripName: '',
        tripDate:''
        };
    }

    componentDidMount() {
    axios.get(`${API_ROOT}/trip/1/`)
        .then(res => {
            const trip = res.data;
            console.log(trip);
            this.setState({ 
                tripName: trip.name,
                tripDate: trip.startDate
            });
        })
    }
  
    render() {
      return ( 
        <div>
          <h3>Destination Container</h3>
          <h3>{this.state.tripName}</h3>
        </div>
      );
    }
  }