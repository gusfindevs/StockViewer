import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
}

export default App;
