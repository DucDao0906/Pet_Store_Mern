/* eslint-disable import/no-anonymous-default-export */
import { Switch } from 'react-router-dom';
import { PrivateRoute, AuthRoute } from '../routes';
import { Home, Signin, Signout, Invoice } from '../pages';

export default function () {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      <AuthRoute exact path='/signin' component={Signin} />
      <PrivateRoute exact path='/signout' component={Signout} />
      <PrivateRoute exact path='/invoice/:page/:id' component={Invoice} />
    </Switch>
  );
}
