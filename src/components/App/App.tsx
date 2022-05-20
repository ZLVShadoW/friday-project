import React from 'react';
import './App.css';
import {Header} from '../Header/Header';
import {RoutesPath} from '../pages/RoutesPath';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../bll/store';
import {check} from '../../bll/reducers/app-reducer';
import {Button} from '../ui/Button/Button';

export const App = () => {
    const greeting = useAppSelector<string>(state => state.app.greeting)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <Header/>
            <RoutesPath/>
            {greeting
                ? <div style={{
                    display: 'flex',
                    width: '50%',
                    justifyContent: 'center',
                    margin: '15px auto',
                    border: '1px solid #ddd',
                    color: 'red'
                }}>{greeting}</div>
                : <Button onClick={() => dispatch(check())}>get greeting</Button>}
        </div>
    )
}

//TODO https://www.canva.com/colors/color-meanings/charcoal/
