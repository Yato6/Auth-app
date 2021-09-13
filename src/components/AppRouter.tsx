import { Switch, Route, Redirect } from 'react-router';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter = () => {
    const isAuth = false

    return (
        isAuth
        ?
        <Switch>
            {privateRoutes.map(route => 
                <Route 
                path={route.path} 
                exact={route.exact} 
                component={route.component}
                key={route.path}
                />
                )}
                <Redirect to={RouteNames.ACCOUNT} />
        </Switch>
        :
        <Switch>
           {publicRoutes.map(route => 
            <Route 
            path={route.path}
             exact={route.exact}
              component={route.component}
               key={route.path}
                />
                )}
                <Redirect to={RouteNames.LOGIN} />
        </Switch>
    )
}

export default AppRouter;