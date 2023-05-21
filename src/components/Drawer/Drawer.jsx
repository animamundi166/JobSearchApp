import { Drawer } from '@mantine/core';
import { useContext } from 'react';
import { DrawerContext } from '../../providers/Drawer/context';

const DrawerWrapper = ({ children }) => {
  const { opened, close } = useContext(DrawerContext);

  return (
    <Drawer opened={opened} onClose={close} size='xs' withCloseButton={false}>
      {children}
    </Drawer>
  );
};
export default DrawerWrapper;
