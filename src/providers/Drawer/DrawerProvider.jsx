import { useDisclosure } from '@mantine/hooks';
import { DrawerContext } from './context';

const DrawerProvider = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <DrawerContext.Provider value={{ opened, toggle, close }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
