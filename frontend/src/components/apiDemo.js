import React from 'react';
import axios from 'axios';

export default class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        tripName: '',
        tripDate:''
        }
    }

    componentDidMount() {
    axios.get(`http://localhost:8000/api/trip/1/`)
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
        <h3>{this.state.tripName}</h3>
      );
    }
  }