import { Pagination } from '@mantine/core';
import { PER_PAGE } from '../../constants';
import { useMediaQuery } from '@mantine/hooks';

const Paginate = ({ activePage, setPage, total }) => {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <Pagination
      value={activePage}
      onChange={setPage}
      total={Math.ceil(total / PER_PAGE)}
      position='center'
      radius='sm'
      mt={matches ? 20 : 40}
      size={matches ? 'sm' : 'md'}
      styles={{
        control: {
          '&[data-active]': { background: '#5E96FC' },
        },
      }}
    />
  );
};
export default Paginate;
