/*
 * Reducer actions related with login
 */
import * as types from './types';
import {createAction} from '@reduxjs/toolkit';

export const unSaveNewsResponse = createAction(
  types.UNSAVE_NEWS_RESPONSE,
  function prepare(data) {
    return {
      payload: data,
    };
  },
);

export const logInAdminRequest = createAction(
  types.LOGIN_ADMIN_REQUEST,
  function prepare(data) {
    return {
      payload: data,
    };
  },
);

export const logInAdminResponse = createAction(
  types.LOGIN_ADMIN_RESPONSE,
  function prepare(data) {
    return {
      payload: data,
    };
  },
);
