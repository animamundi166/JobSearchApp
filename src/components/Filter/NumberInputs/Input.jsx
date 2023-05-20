import { NumberInput } from '@mantine/core';
import { ReactComponent as NumberInputIcon } from '../../../assets/NumberInput.svg';
import styles from './Input.module.scss';
import { useRef } from 'react';

const Input = props => {
  const handlers = useRef();

  const incrementHandler = () => {
    handlers.current.increment();
  };
  const decrementHandler = () => {
    handlers.current.decrement();
  };

  return (
    <NumberInput
      {...props}
      hideControls
      type='number'
      min={1000}
      step={1000}
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
              props.value <= 0 || props.value === undefined
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
};
export default Input;
