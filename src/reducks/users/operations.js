// ///////////////////////////////////
// ・複雑な処理を記述する
// ・redux-thunkで非同期を制御する
// ・Actionsを呼び出す
// ///////////////////////////////////
import { signInAction } from './actions';
import { push } from 'connected-react-router';

export const signIn = () => {
  // dispatch : Actionsを呼び出すために必要
  // getState : 現在のStoreのstateを取得することができる
  return async (dispatch, getState) => {
    // 現在のReduxのStateを取得
    const state = getState();

    // ユーザーのログイン情報を取得
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/underfield';
      const response = await fetch(url)
        .then((response) => response.json())
        .catch(() => null);

      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '00005',
          username: username,
        })
      );

      dispatch(push('/'));
    }
  };
};
