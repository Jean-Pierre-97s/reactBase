import React from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MyRoute from './myRoute';
import login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={login} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
