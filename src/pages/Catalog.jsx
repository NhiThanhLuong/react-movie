import { useParams } from 'react-router-dom';

import { category as cate } from '@/api/tmdbApi';
import PageHeader from '@/components/page-header';
import MovieGrid from '@/components/movie-grid';

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>{category === cate.movie ? 'Movies' : 'TV series'}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
