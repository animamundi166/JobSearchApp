import { NumberInput } from '@mantine/core';
import { ReactComponent as Down } from '../../../assets/Down.svg';
import styles from './styles';

export function InputFrom() {
  return (
    <NumberInput
      mt={8}
      placeholder='От'
      min={1000}
      step={1000}
      styles={styles}
      rightSection={<Down />}
    />
  );
}
