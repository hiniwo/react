import React from 'react';
import demo from './routes/demo';
import Products from './routes/Products';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/demo" exact component={demo} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}



export default RouterConfig;
