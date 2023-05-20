import { params } from '../../../constants';
import Input from './Input';

export function InputFrom({ inputFromValue, setInputFromValue }) {
  params.payment_from = inputFromValue;

  return (
    <Input
      placeholder='От'
      value={inputFromValue}
      onChange={setInputFromValue}
    />
  );
}
