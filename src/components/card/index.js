import React, { useContext } from 'react';

import './Card.css';

import { GenderContext } from 'context/GenderContext';

function Card({ name, picture, genderList, overview, average }) {
  const { genders } = useContext(GenderContext);

  const genderName = genders
    .filter((gender) => genderList.includes(gender.id))
    .map((gender) => gender.name)
    .join(' ');

  return (
    <div className="card-container">
      <img
        src={'https://image.tmdb.org/t/p/original' + picture}
        className="card-picture"
        alt={name}
      />
      <div className="card-content">
        <h4 className="card-title">{name}</h4>
        <p className="card-description">{genderName}</p>
      </div>
      <span className="card-rating">{average}</span>
    </div>
  );
}

export default Card;
