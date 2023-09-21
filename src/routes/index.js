import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
