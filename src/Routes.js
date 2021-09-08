import React from 'react';

// route
import { Route, Switch } from 'react-router-dom';

//원구 page
import loginWongu from './pages/wonguko/Login/Login';
import listWongu from './pages/wonguko/List/List';
import detailWongu from './pages/wonguko/Detail/Detail';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/login-wongu" component={loginWongu} />
        <Route exact path="/list-wongu" component={listWongu} />
        <Route exact path="/detail-wongu" component={detailWongu} />
      </Switch>
    </>
  );
}

export default Router;
