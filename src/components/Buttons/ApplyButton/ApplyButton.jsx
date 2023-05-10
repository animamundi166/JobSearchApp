import style1 from './ApplyButton.module.scss';
import style2 from '../Button.module.scss';
import { clsx } from '@mantine/core';

const ApplyButton = () => {
  return (
    <button className={clsx(style1.button, style2.common_button)}>
      Применить
    </button>
  );
};
export default ApplyButton;
