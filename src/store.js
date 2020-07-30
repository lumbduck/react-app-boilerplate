import { createStore, combineReducers, applyMiddleware } from 'redux';

// 3 imports for persistence storage (omit if not using redux-persist)
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// 2 imports for async dispatch
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {};

/*
The remainder of this file is configured for persistent local storage.
It will merge the redux store 2 levels deep (based on autoMergeLevel2)
Omit (and see below) if not using redux-persist.
*/
const persistConfig = {
    key: 'root',
    storage,  // defaults to local storage
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    /*
    run the Redux Devtools extension in the browser, if available,
    and ensure that it plays nicely with redux-thunk
    (to see how to invoke the browser extension without applying thunk
       middleware, see the `window.__REDUX_DEVTOOLS_EXTENSION__()`
       call in the commented section below)
    */
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
);

/*
If not using redux-persist and redux-thunk, replace everything above
(after the persistConfig declaration) with this:
*/
// const rootReducer = combineReducers(reducers);

// export const configureStore = () => createStore(
//     rootReducer,
//     // run the Redux Devtools extension in the browser, if available
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
