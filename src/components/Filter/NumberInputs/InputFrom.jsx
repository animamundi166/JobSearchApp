import { NumberInput } from '@mantine/core';
import styles from './Input.module.scss';
import { ReactComponent as NumberInputIcon } from '../../../assets/NumberInput.svg';
import { params } from '../../../constants';
import { useRef } from 'react';

export function InputFrom({ inputFromValue, setInputFromValue }) {
  params.payment_from = inputFromValue;
  const handlers = useRef();

  const incrementHandler = () => {
    handlers.current.increment();
  };
  const decrementHandler = () => {
    handlers.current.decrement();
  };

  return (
    <NumberInput
      hideControls
      placeholder='От'
      min={1000}
      step={1000}
      type='number'
      value={inputFromValue}
      onChange={setInputFromValue}
      handlersRef={handlers}
      mt={8}
      size='md'
      rightSection={
        <div className={styles.input_icons}>
          <NumberInputIcon
            className={styles.input_icon}
            onClick={incrementHandler}
          />

          <NumberInputIcon
            className={
              inputFromValue <= 0 || inputFromValue === undefined
                ? styles.input_icon_down_disabled
                : styles.input_icon_down
            }
            onClick={decrementHandler}
          />
        </div>
      }
      styles={{
        input: {
          fontSize: 14,
        },
      }}
    />
  );
}
