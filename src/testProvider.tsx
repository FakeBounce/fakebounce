import React, { ReactNode } from 'react';
import { RenderOptions, render as rtlRender } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './utils/store';
import theme from './chakra/theme';

function customRender(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  }: {
    preloadedState?: any;
    store?: any;
  } & RenderOptions = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <AppWrapper>{children}</AppWrapper>
        </Provider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const AppWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export * from '@testing-library/react';
export { customRender as render };
