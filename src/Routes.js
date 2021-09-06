import React from 'react';

// route
import { Route, Switch } from 'react-router-dom';

//원구 page
import loginWongu from './pages/wonguko/Login/Login';
import listWongu from './pages/wonguko/List/List';
import detailWongu from './pages/wonguko/Detail/Detail';

//다빈 page
import loginDabin from './pages/dabinan/Login/Login';
import listDabin from './pages/dabinan/List/List';
import detailDabin from './pages/dabinan/Detail/Detail';

//승완 page
import loginSeungwan from './pages/seungwanhan/Login/Login';
import listSeungwan from './pages/seungwanhan/List/List';
import detailSeungwan from './pages/seungwanhan/Detail/Detail';

//지훈 page
import loginJihoon from './pages/jihoonhan/Login/Login';
import listJihoon from './pages/jihoonhan/List/List';
import detailJihoon from './pages/jihoonhan/Detail/Detail';

//준범 page
import loginJunbeom from './pages/junbeomham/Login/Login';
import listJunbeom from './pages/junbeomham/List/List';
import Detail from './pages/junbeomham/Detail/Detail';

import DETAIL_DATA from './pages/junbeomham/Detail/mockData/detailMockData';

/*
  준범을 제외한 다른 페이지의 컴포넌트들은 구현이 안 되어 있기 때문에,
  Warning: Failed prop type: Invalid prop 'component' supplied to 'Route': the prop is not a valid React component at Route
  에러 발생
*/
function Router() {
  return (
    <>
      <Switch>
        {/* 원구 */}
        <Route exact path="/login-wongu" component={loginWongu} />
        <Route exact path="/list-wongu" component={listWongu} />
        <Route exact path="/detail-wongu" component={detailWongu} />

        {/* 다빈 */}
        <Route exact path="/login-dabin" component={loginDabin} />
        <Route exact path="/list-dabin" component={listDabin} />
        <Route exact path="/detail-dabin" component={detailDabin} />

        {/* 승완 */}
        <Route exact path="/login-seungwan" component={loginSeungwan} />
        <Route exact path="/list-seungwan" component={listSeungwan} />
        <Route exact path="/detail-seungwan" component={detailSeungwan} />

        {/* 지훈 */}
        <Route exact path="/login-jihoon" component={loginJihoon} />
        <Route exact path="/list-jihoon" component={listJihoon} />
        <Route exact path="/detail-jihoon" component={detailJihoon} />

        {/* 준범 */}
        <Route exact path="/login-junbeom" component={loginJunbeom} />
        <Route exact path="/list-junbeom" component={listJunbeom} />
        <Route
          exact
          path="/detail-junbeom"
          render={() => <Detail {...DETAIL_DATA[0]} />}
        />
      </Switch>
    </>
  );
}

export default Router;
