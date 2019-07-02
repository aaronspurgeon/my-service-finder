import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import { Search } from './components/Search'
import VenueList from './components/VenueList'
import Dropdown from './components/Dropdown'
// import { get } from 'http';


class App extends Component {

  constructor() {
    
    super();

    this.state = {
      venues: [],
      images: []
    }; 
  }

  componentDidMount() {
    // this.getVenues();
    // this.getDetails();
  }

  getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function(location) {
      callback(location.coords.latitude + ',' + location.coords.longitude)
    })
  };

  handleSubmit(query) {
    this.getVenues(query)
    this.triggerDetails();
  }

  

  getVenues(query) {
  
    let setVenueState = this.setState.bind(this);
    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';
    
    this.getLocation(function (latlong) {
  
      const params = {
        client_id: 'L0ZK3VLIPIYJBRFHR2D421ZUPVBOEBUPMR5PQFKWDMT1UQJA',
          client_secret: 'HH1FKHUKXA4LNKNEGZ0PKSO3OJTJHOQS04ZWVKN3LRSB3ENG',
        limit: 3,
        query: query,
        v: '20130619',
        ll: latlong,
      };

      fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      }).then(response => response.json())
      .then(response => {
        setVenueState({venues: response.response.groups[0].items});
      });  
    });
  } 

// central park id '412d2800f964a520df0c1fe3'
  

  // this.getDetails('412d2800f964a520df0c1fe3')

  // console.log(this.state.venues)


triggerDetails() {
  setTimeout(() => {
    this.state.venues.forEach((item) => {
      // console.log(item.venue.id)
      this.getDetails(item.venue.id)
    })
  }, 4000);
}


getDetails(VENUE_ID) {
  const detailsEndPoint = `https://api.foursquare.com/v2/venues/${VENUE_ID}?`;
  const params2 = {
    client_id: 'L0ZK3VLIPIYJBRFHR2D421ZUPVBOEBUPMR5PQFKWDMT1UQJA',
    client_secret: 'HH1FKHUKXA4LNKNEGZ0PKSO3OJTJHOQS04ZWVKN3LRSB3ENG',
    v: '20130619'
  };

  // let setDetailsState = this.setState.bind(this)

  fetch(detailsEndPoint + new URLSearchParams(params2), {
      method: 'GET'
    }).then(response => response.json())
    .then(response => {
      // setDetailsState(
        const photo = response.response.venue;
        const venueMatch = this.state.venues.find(venue => VENUE_ID === photo.id);
        const newVenueObject = Object.assign(venueMatch, photo);
        this.setState({
          venues: Object.assign(this.state.venues, newVenueObject)
        });
        console.log(photo)
      // );
    })
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