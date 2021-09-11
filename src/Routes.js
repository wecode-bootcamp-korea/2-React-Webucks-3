import React from 'react';

// route
import { Route, Switch } from 'react-router-dom';

//원구 page
import loginWongu from './pages/wonguko/Login/Login';
import listWongu from './pages/wonguko/List/List';
import detailWongu from './pages/wonguko/Detail/Detail';
import TopNav from './components/Nav/TopNav';
import Footer from './components/Shared/Footer';

function Router() {
  return (
    <Switch>
      <Route exact path="/login-wongu" component={loginWongu} />
      <>
        <TopNav />
        <Route exact path="/list-wongu" component={listWongu} />
        <Route exact path="/detail-wongu" component={detailWongu} />
        <Footer />
      </>
    </Switch>
  );
}

export default Router;
