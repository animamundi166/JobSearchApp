import { Pagination } from '@mantine/core';
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
      styles={{
        control: {
          '&[data-active]': { background: '#5E96FC' },
        },
      }}
    />
  );
};
export default Paginate;
