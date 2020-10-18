// ////////////////////////////////////////////
// Storeで管理しているstateを参照する関数を記述
// ////////////////////////////////////////////
import { createSelector } from 'reselect';

const usersSelector = (state) => state.users;

export const getUserId = createSelector([usersSelector], (state) => state.uid);
export const getUserName = createSelector([usersSelector], (state) => state.username);
