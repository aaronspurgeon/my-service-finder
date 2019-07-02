import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import { Search } from './components/Search'
import VenueList from './components/VenueList'
import Dropdown from './components/Dropdown'


class App extends Component {

  constructor() {
    
    super();

    this.state = {
      venues: []
    };
    
    
  }

  componentDidMount() {
    this.getVenues();
  }

  getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function(location) {
      callback(location.coords.latitude + ',' + location.coords.longitude)
    })
  };

  handleSubmit(query) {
    this.getVenues(query);
  }
  
  getVenues(query) {
  
    let setVenueState = this.setState.bind(this);
  
    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';
  
    this.getLocation(function (latlong) {
  
      const params = {
        client_id: 'P0MUIV0RTLQVGVOGHMEJY2TTUPA4T0GZH3BBZI5NP5OGPWIS',
        client_secret: 'ZNEH5BYOLXRZ5DZUBP3M11YSYIKXTULHUW0MJFZ2USJ22PAC',
        limit: 10,
        query: query,
        v: '20130619',
        ll: latlong
      };
  
      fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      }).then(response => response.json())
      .then(response => {
        setVenueState({venues: response.response.groups[0].items});
      });
    });
  
  }

  render() {
    return (
      <div className="mainDiv">
        
        <Dropdown />
        <Search onSubmit={(value)=>this.handleSubmit(value)}/>
        <VenueList
         venues={this.state.venues}
        />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));