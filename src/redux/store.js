import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; // combine all reducers

const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools(),
});

export default store;
