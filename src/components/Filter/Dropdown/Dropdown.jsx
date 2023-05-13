import { Select } from '@mantine/core';
import { ReactComponent as Down } from '../../../assets/Down.svg';
import styles from './styles';
import { useGetCatalogues } from '../../../hooks/useGetCatalogues';

export function Dropdown() {
  const { data, isSuccess } = useGetCatalogues();
  console.log(data);

  return (
    isSuccess && (
      <Select
        data={isSuccess && data}
        mt={8}
        size='md'
        clearable
        placeholder='Выберете отрасль'
        rightSection={<Down />}
        styles={styles}
      />
    )
  );
}
