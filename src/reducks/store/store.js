import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { UsersReducer } from '../users/reducers';

export default function createStore(history) {
  return reduxCreateStore(
    // Reducerを一つにまとめる（一元管理）
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    // 導入したいミドルウェアの数だけ引数を取ることができる
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
