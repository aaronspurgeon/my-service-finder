import React, { Component } from 'react';

// let photo = bestPhoto.prefix + '100x100' + bestPhoto.suffix;

export const Venue = ({ name, location, bestPhoto }) => (
    <li className="venue">
    {/* <img src={bestPhoto.prefix + '100x100' + bestPhoto.suffix}/> */}
    <p>{name}</p>
    <p>{location}</p>
    {/* <p>{bestPhoto.prefix}</p> */}
    </li>


)