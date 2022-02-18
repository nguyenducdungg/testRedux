import { createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo'
import { createLogger } from 'redux-logger';
import authReducer from './auth'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage: localStorage,
//     whilelist: ['auth']
// }

const reducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
})

// const persistedReducer = persistReducer(persistConfig, reducer)

// const logger = createLogger()

//demo
// const myMiddleware = store => next => action => {
//     if (action.type === 'ADD_TODO' && action.payload === 'fuck') {
//         action.payload = '*******'
//     }
//     return next(action)
// }
// const asyncMiddleware = store => next => action => {
//     if(typeof action === 'function') {
//        return action(next);
//     }
//     return next(action)
// }

// export default createStore(reducer, {}, applyMiddleware(myMiddleware, thunk, logger))

const store = configureStore({
    reducer: reducer
})
// export const persistor = persistStore(store)
export default store

