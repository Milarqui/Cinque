import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import createUserReducer from '../features/createUser/createUserSlice';
import transferReducer from '../features/transfers/transferSlice';
import friendReducer from '../features/friends/friendSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    createUser: createUserReducer,
    transfer: transferReducer,
    friend: friendReducer
  },
});
