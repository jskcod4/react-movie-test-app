import useTrending from 'hooks/useTrending';
import Card from 'components/card';

import { TrendingTypes } from 'settings';

import './TrendingList.css';

function TrendingList({ type = TrendingTypes.Day }) {
  const { trending } = useTrending({ type });

  return (
    <>
      <h4 className="gender-container-title">Trending By {type}</h4>
      <section className="gender-container">
        {trending.map(
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
              modeMini="true"
            />
          )
        )}
      </section>
    </>
  );
}

export default TrendingList;
