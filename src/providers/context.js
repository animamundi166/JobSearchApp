import { createContext } from 'react';

export const DrawerContext = createContext({ opened: false, toggle: () => {}, close: () => {} });
