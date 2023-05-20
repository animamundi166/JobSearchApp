import { NumberInput } from '@mantine/core';
import styles from './Input.module.scss';
import { ReactComponent as NumberInputIcon } from '../../../assets/NumberInput.svg';
import Input from './Input';
import { params } from '../../../constants';

export function InputTo({ inputToValue, setInputToValue }) {
  params.payment_to = inputToValue;

  return (
    <Input placeholder='До' value={inputToValue} onChange={setInputToValue} />
  );
}
