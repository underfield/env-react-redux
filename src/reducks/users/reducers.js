// Actionからのデータを受け取り、StoreのStateをどう変更するのかを決める
import * as Actions from './actions';
import initialState from '../store/initialState';

// 第一引数：State 第二引数：Actionがreturnした値
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
