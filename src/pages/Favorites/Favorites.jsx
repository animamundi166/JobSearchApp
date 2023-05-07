import { useState } from 'react';
import styles from './Favorites.module.scss';
import Paginate from '../../components/Paginate/Paginate';
import VacancyItem from '../../components/VacancyItem/VacancyItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { PER_PAGE } from '../../constants';

const Favorites = () => {
  const [value, setValue] = useLocalStorage();
  const [activePage, setPage] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {value &&
          value
            .slice(PER_PAGE * (activePage - 1), PER_PAGE * activePage)
            .map(item => <VacancyItem key={item.id} vacancy={item} />)}
      </div>
      {value.length > 4 && (
        <Paginate
          activePage={activePage}
          setPage={setPage}
          total={value.length}
        />
      )}
    </div>
  );
};

export default Favorites;
