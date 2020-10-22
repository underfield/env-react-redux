import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../reducks/users/operations';

const Login = () => {
  // useDispatchでstoreに紐付いたdispatchを取得
  const dispatch = useDispatch();

  // useSelectorでStoreのstateを取得
  const selector = useSelector((state) => state);

  console.log(selector.router);
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(signIn())}>ログイン</button>
    </div>
  );
};
export default Login;
