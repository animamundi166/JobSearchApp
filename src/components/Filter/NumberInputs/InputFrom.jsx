import { useContext } from 'react';
import { params } from '../../../constants';
import Input from './Input';
import { ParamsContext } from '../../../providers/Params/context';

export function InputFrom() {
  const { inputFromValue, setInputFromValue } = useContext(ParamsContext);
  params.payment_from = inputFromValue;

  return (
    <Input
      placeholder='От'
      value={inputFromValue}
      onChange={setInputFromValue}
    />
  );
}
