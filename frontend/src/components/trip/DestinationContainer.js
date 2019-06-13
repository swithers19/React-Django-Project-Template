import React from 'react';
import axios from 'axios';
import { API_ROOT } from '../apiConfig';
import EasyEdit from 'react-easy-edit';

export default class DestinationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
        id: props.match.params.id,
        destList: []
        };
    }

    componentDidMount() {
    axios.get(`${API_ROOT}/trip/${this.state.id}/destinations`)
        .then(res => {
            const destinations = res.data;
            console.log(destinations);
            this.setState({ 
                destList: destinations
            });
        })
    }
    
    render() {
      return ( 
        <div>
          <h3>Destination Container</h3>
          <h3>{this.state.tripName}</h3>
          <EasyEdit
          type="text"
          onSave={() => {}}
          onValidate={() => true}
        />
        </div>
      );
    }
  }