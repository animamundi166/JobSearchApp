import { Select } from '@mantine/core';
import { ReactComponent as Down } from '../../assets/Down.svg';

export function Dropdown() {
  return (
    <Select
      mt={8}
      placeholder='Выберете отрасль'
      rightSection={<Down size='1rem' />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={[
        'React',
        'Angular',
        'Svelte',
        'Vue',
        'Angular',
        'Svelte',
        'Vue',
        'Angular',
        'Svelte',
        'Vue',
        'Angular',
        'Svelte',
        'Vue',
      ]}
    />
  );
}
