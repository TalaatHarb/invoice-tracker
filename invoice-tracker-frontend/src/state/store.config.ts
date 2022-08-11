import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const createApplicationStore = () => createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export const store = createApplicationStore();

export default store;