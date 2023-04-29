import { NumberInput } from '@mantine/core';
import { ReactComponent as Down } from '../../assets/Down.svg';

export function Input() {
  return (
    <NumberInput
      mt={8}
      placeholder='От'
      // defaultValue={0}
      min={0}
      max={999999}
      rightSection={<Down size='1rem' />}
      rightSectionWidth={30}
    />
  );
}
