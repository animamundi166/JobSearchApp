import { Pagination } from '@mantine/core';
import styles from './styles';
import { PER_PAGE } from '../../constants';

const Paginate = ({ activePage, setPage, total }) => {
  return (
    <Pagination
      value={activePage}
      onChange={setPage}
      total={Math.ceil(total / PER_PAGE)}
      position='center'
      radius='sm'
      mt={40}
      styles={styles}
    />
  );
};
export default Paginate;
