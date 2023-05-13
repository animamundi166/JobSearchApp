import styles from './Vacancy.module.scss';
import { formatSalary } from '../../utils/formatSalary';
import { ReactComponent as Location } from '../../assets/Location.svg';
import { useQuery } from '@tanstack/react-query';
import api from '../../API/api';
import { useParams } from 'react-router-dom';
import { Loader } from '@mantine/core';
import parse from 'html-react-parser';
import StarButton from '../../components/VacancyItem/StarButton/StarButton';

const Vacancy = () => {
  const { id } = useParams();

  const { isLoading, data: vacancy } = useQuery(['vacancy', id], () =>
    api.getVacancy(id)
  );

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader variant='dots' size='xl' />
        </div>
      ) : (
        <>
          <div className={styles.card}>
            <div className={styles.profession_star}>
              <p className={styles.profession}>{vacancy.profession}</p>
              <div className={styles.star_container}>
                <StarButton vacancy={vacancy} />
              </div>
            </div>

            <p className={styles.salary_and_type}>
              <span className={styles.salary}>
                з/п{' '}
                {formatSalary(
                  vacancy.minPayment,
                  vacancy.maxPayment,
                  vacancy.currency
                )}
              </span>
              <span className={styles.dot}>•</span>
              <span className={styles.type_of_work}>{vacancy.worktime}</span>
            </p>

            <p className={styles.location}>
              <Location />
              <span className={styles.town}>{vacancy.town}</span>
            </p>
          </div>
          <div className={styles.description}>{parse(vacancy.description)}</div>
        </>
      )}
    </div>
  );
};
export default Vacancy;
