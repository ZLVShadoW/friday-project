import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Login} from './Login/Login';
import {NewPassword} from './NewPassword/NewPassword';
import {PasswordRecovery} from './PasswordRecovery/PasswordRecovery';
import {Profile} from './Profile/Profile';
import {Registration} from './Registration/Registration';
import {Test} from './Test/Test';
import {Error404} from './Error404/Error404';

export const PATH = {
    error404: 'error-404',
    login: 'login',
    newPassword: 'new-password',
    passwordRecovery: 'password-recovery',
    profile: 'profile',
    registration: 'registration',
    test: 'test'
}

export const ConfigPATH = [
    {
        path: PATH.error404,
        element: <Error404/>
    },
    {
        path: PATH.login,
        element: <Login/>
    },
    {
        path: PATH.newPassword,
        element: <NewPassword/>
    },
    {
        path: PATH.passwordRecovery,
        element: <PasswordRecovery/>
    },
    {
        path: PATH.profile,
        element: <Profile/>
    },
    {
        path: PATH.registration,
        element: <Registration/>
    },
    {
        path: PATH.test,
        element: <Test/>
    }
]

export const RoutesPath = () => {
    return (
        <>
            <Routes>
                {/*<Route path={PATH.login} element={<Login />} />*/}
                {/*<Route path={PATH.newPassword} element={<NewPassword />} />*/}
                {/*<Route path={PATH.passwordRecovery} element={<PasswordRecovery />} />*/}
                {/*<Route path={PATH.profile} element={<Profile />} />*/}
                {/*<Route path={PATH.registration} element={<Registration />} />*/}
                {/*<Route path={PATH.test} element={<Test />} />*/}
                {/*<Route path={PATH.error404} element={<Error404 />} />*/}
                {/*<Route path={'*'} element={<Navigate to={PATH.error404} />} />*/}

                <Route path={'/'} element={<Navigate to={PATH.login}/>}/>
                {
                    ConfigPATH.map(route => <Route path={route.path} element={route.element} key={route.path}/>)
                }
                <Route path={'*'} element={<Navigate to={PATH.error404}/>}/>
            </Routes>
        </>
    )
}