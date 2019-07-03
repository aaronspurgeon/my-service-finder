import {Venue} from './Venue';
import React, {Component} from 'react';

export default class VenueList extends Component {
//https://fastly.4sqi.net/img/general/


  render() {
    // const picture = `https://fastly.4sqi.net/img/general/ + 100/100 + ${response.response.venue.bestPhoto.suffix}`
      return (
        <ul className="venue-list">
          {
            this.props.venues && this.props.venues.map((item, i) =>
              <Venue key = {i}
                name={item.venue.name}
                location={item.venue.location.address}
                photo={item.venue}
                {...this.props}
              />
            )
          }
        </ul>
    )
  }
}

// export const VenueList = this.props.venues.map((item, i) =>
//     <Venue 
//         key = {i}
//         name = {item.venue.name}
//     />
// );



