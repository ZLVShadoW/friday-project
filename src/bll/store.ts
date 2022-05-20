import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/app-reducer';

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


// ----------- types
export type AppRootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector

//надо ли dispatch типизировать
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()