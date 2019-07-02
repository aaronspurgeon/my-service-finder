import React, { Component } from 'react';

export const Venue = ({ name, location }) => (
    <li className="venue">
    <p>{name}</p>
    <p>{location}</p>
    </li>


)