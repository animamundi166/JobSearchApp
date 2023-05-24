import Input from './Input';
import { params } from '../../../constants';
import { useContext } from 'react';
import { ParamsContext } from '../../../providers/Params/context';

export function InputTo() {
  const { inputToValue, setInputToValue } = useContext(ParamsContext);
  params.payment_to = inputToValue;

  return (
    <Input
      placeholder='До'
      value={inputToValue}
      onChange={setInputToValue}
      data-elem='salary-to-input'
    />
  );
}
