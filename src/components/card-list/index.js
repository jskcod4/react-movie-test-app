import React from 'react';

import Card from 'components/card';
import useMovies from 'hooks/useMovies';

import './CardList.css';

function CardList({ keyword }) {
  const { movies, loading } = useMovies({ keyword });

  if (loading) {
    return <section className="empty-content">Loading ...</section>;
  }

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
