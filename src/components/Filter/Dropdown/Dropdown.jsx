import { Loader, Select } from '@mantine/core';
import { ReactComponent as DropdownIcon } from '../../../assets/Dropdown.svg';
import styles from './Dropdown.module.scss';
import { useGetCatalogues } from '../../../hooks/useGetCatalogues';
import { params } from '../../../constants';
import { useState } from 'react';

export function Dropdown({ catalogValue, setCatalogValue }) {
  const [isOpened, setIsOpened] = useState(false);
  const { data, isLoading } = useGetCatalogues();
  params.catalogues = catalogValue;

  return (
    <Select
      data-elem='industry-select'
      value={catalogValue}
      onChange={setCatalogValue}
      onDropdownClose={() => setIsOpened(false)}
      onDropdownOpen={() => setIsOpened(true)}
      data={data || []}
      placeholder='Выберете отрасль'
      rightSection={
        isLoading ? (
          <Loader size='xs' />
        ) : (
          <DropdownIcon
            className={isOpened ? styles.dropdown_icon : undefined}
          />
        )
      }
      mt={8}
      size='md'
      styles={{
        rightSection: { pointerEvents: 'none' },
        input: {
          fontSize: 14,
        },
        item: {
          whiteSpace: 'initial',
          fontSize: 14,
          '&[data-hovered]': { background: '#DEECFF' },
          '&[data-selected], &[data-selected]:hover': { background: '#5E96FC' },
        },
      }}
    />
  );
}
