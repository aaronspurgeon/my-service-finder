import React, { Component } from 'react';

// let photo = bestPhoto.prefix + '100x100' + bestPhoto.suffix;


export const Venue = ({ name, location, photo }) => (
    <div>
        <li className="venue">
        <img src={ console.log(photo) }/>
        <p>{name}</p>
        <p>{location}</p>
        {/* <p>{bestPhoto.prefix}</p> */}
        </li>
        {/* <img src={ bestPhoto }></img> */}
    </div>
    


)