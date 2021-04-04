import React, { useEffect, useState } from 'react';

import GetMovies from 'services/GetMovies';
import Card from 'components/card';

import './CardList.css';

function CardList({ keyword }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetMovies({ keyword }).then((res) => {
      if (res) {
        setMovies(res);
      }
    });
  }, [keyword]);

  return (
    <section className="card-wrapper">
      {movies.map(
        ({
          id,
          original_title,
          overview,
          vote_average,
          genre_ids,
          poster_path,
        }) => (
          <Card
            key={id}
            name={original_title}
            overview={overview}
            average={vote_average}
            genderList={genre_ids}
            picture={poster_path}
          />
        )
      )}
    </section>
  );
}

export default CardList;
