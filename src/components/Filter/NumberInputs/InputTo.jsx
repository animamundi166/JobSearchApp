import { NumberInput } from '@mantine/core';
import styles from './Input.module.scss';
import { ReactComponent as NumberInputIcon } from '../../../assets/NumberInput.svg';
import { params } from '../../../constants';
import { useRef } from 'react';

export function InputTo({ inputToValue, setInputToValue }) {
  params.payment_to = inputToValue;

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
      placeholder='До'
      min={1000}
      step={1000}
      type='number'
      value={inputToValue}
      onChange={setInputToValue}
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
              inputToValue <= 0 || inputToValue === undefined
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
