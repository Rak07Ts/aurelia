import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { BookingProvider } from './context/BookingContext';
import { NavigationProvider } from './context/NavigationContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CurrencyProvider>
        <BookingProvider>
          <NavigationProvider>
            <App />
          </NavigationProvider>
        </BookingProvider>
      </CurrencyProvider>
    </ThemeProvider>
  </React.StrictMode>
);
