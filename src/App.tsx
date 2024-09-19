import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout'; 
import { AppRoutes } from './routing/Routes';
// import { LayoutSplashScreen } from './layout/core';

const App = () => {
  return (
    // <Suspense fallback={<LayoutSplashScreen />}></Suspense>
    <Suspense>
      <BrowserRouter>
        <Layout>
        <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App; 