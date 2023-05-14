import { NumberInput } from '@mantine/core';
import styles from './styles';
import { params } from '../../../constants';

export function InputTo({ inputToValue, setInputToValue }) {
  params.payment_to = inputToValue;

  return (
    <NumberInput
      mt={8}
      placeholder='До'
      min={1000}
      step={1000}
      size='md'
      type='number'
      value={inputToValue}
      onChange={setInputToValue}
      styles={styles}
      // rightSection={<Down />}
    />
  );
}
