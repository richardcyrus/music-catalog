import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import LibraryPage from './pages/library';

function Routes() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <PageHeader />
        <main role="main" className="w3-container w3-main">
          <Switch>
            <Route exact path="/library" component={LibraryPage} />
          </Switch>
        </main>
        <PageFooter />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default Routes;
