import './App.css';

import { About, CV, Home, Other } from './pages';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { dynamicActivate, getLocale } from './i18n';

import ErrorPage from './components/nav/ErrorPage';
import { I18nProvider } from '@lingui/react';
import Layout from './components/nav/layout';
import { i18n } from '@lingui/core';

const App: React.FC = () => {
  useEffect(() => {
    dynamicActivate(getLocale());
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <Routes>
        <Route element={<Layout withSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/autre" element={<Other />} />
      </Routes>
    </I18nProvider>
  );
};

export default App;
