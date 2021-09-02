import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loginDabin from './pages/dabinan/Login/Login';
import listDabin from './pages/dabinan/List/List';
import detailDabin from './pages/dabinan/Detail/Detail';

function Router() {
  return (
    <Switch>
      <Route exact path="/login-dabin" component={loginDabin} />
      <Route exact path="/list-dabin" component={listDabin} />
      <Route exact path="/detail-dabin" component={detailDabin} />
    </Switch>
  );
}

export default Router;
