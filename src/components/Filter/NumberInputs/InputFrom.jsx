import { NumberInput } from '@mantine/core';
import styles from './styles';
import { params } from '../../../constants';

export function InputFrom({ inputFromValue, setInputFromValue }) {
  params.payment_from = inputFromValue;

  return (
    <NumberInput
      mt={8}
      placeholder='От'
      min={1000}
      step={1000}
      size='md'
      type='number'
      value={inputFromValue}
      onChange={setInputFromValue}
      styles={styles}
      // rightSection={<Down />}
    />
  );
}
