import styles from './Vacancy.module.scss';
import { formatSalary } from '../../utils/formatSalary';
import { ReactComponent as Location } from '../../assets/Location.svg';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Loader } from '@mantine/core';
import parse from 'html-react-parser';
import StarButton from '../../components/VacancyItem/StarButton/StarButton';
import { getVacancy } from '../../services/getVacancy';

const Vacancy = () => {
  const { id } = useParams();

  const { isLoading, data: vacancy } = useQuery(['vacancy', id], () =>
    getVacancy(id)
  );

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader size='xl' />
        </div>
      ) : (
        <>
          <div className={styles.card}>
            <div className={styles.profession_star}>
              <p className={styles.profession}>{vacancy.profession}</p>
              <StarButton vacancy={vacancy} />
            </div>

            <div className={styles.salary_and_type}>
              <span className={styles.salary}>
                з/п{' '}
                {formatSalary(
                  vacancy.agreement,
                  vacancy.minPayment,
                  vacancy.maxPayment,
                  vacancy.currency
                )}
              </span>
              <span className={styles.dot}>•</span>
              <span className={styles.type_of_work}>{vacancy.worktime}</span>
            </div>

            <p className={styles.location}>
              <Location className={styles.location_icon} />
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
