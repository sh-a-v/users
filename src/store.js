import { createStore, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { reducer as formReducer } from 'redux-form'

import usersReducer from './reducers/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
  form: formReducer
});

const store = createStore(
  reducer,
  undefined,
  autoRehydrate()
);

persistStore(store);

export default store;
