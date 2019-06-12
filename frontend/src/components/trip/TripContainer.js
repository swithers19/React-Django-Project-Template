import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../apiConfig';
import Trip from './Trip';

export default class TripContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        trips:[]
        }
    }

    componentDidMount() {
    axios.get(`${API_ROOT}/trip/`)
        .then(res => {
            const trip = res.data;
            this.setState({ 
                trips:trip
            });
            console.log(this.state.trips[0]);
        })
    }
  
    render() {

      return ( 

          <div className='row' style={{marginTop:'40px'}}>
          {this.state.trips.map((trip, index) => (
            <Trip key={index} trip={trip}></Trip>
            
          ))}
        </div>
      );

  }
}