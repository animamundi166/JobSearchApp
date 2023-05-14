import { Select } from '@mantine/core';
import { ReactComponent as Down } from '../../../assets/Down.svg';
import styles from './styles';
import { useGetCatalogues } from '../../../hooks/useGetCatalogues';
import { params } from '../../../constants';

export function Dropdown({ catalogValue, setCatalogValue }) {
  const { data, isSuccess } = useGetCatalogues();
  params.catalogues = catalogValue;

  return (
    isSuccess && (
      <Select
        value={catalogValue}
        onChange={setCatalogValue}
        data={isSuccess && data}
        mt={8}
        size='md'
        placeholder='Выберете отрасль'
        rightSection={<Down />}
        styles={styles}
      />
    )
  );
}
