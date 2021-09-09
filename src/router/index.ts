import React from "react"
import Account from "../pages/Account"
import Login from "../pages/Login"


export interface IRoute {
    path: string;
    component: React.ComponentType,
    exact?: boolean;
}

export enum RouteNames {
    LOGIN =  '/login',
    ACCOUNT = '/Account'
}

export const publicRoutes: IRoute[] = [
     {path: RouteNames.LOGIN, exact: true, component: Login}
   
    
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.ACCOUNT, exact: true, component: Account}
]