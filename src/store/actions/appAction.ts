/*
 * Reducer actions related with login
 */
import * as types from './types';
import {createAction} from '@reduxjs/toolkit';

export const getConfigRequest = createAction(
  types.GET_CONFIG_REQUEST,
  function prepare(data) {
    return {
      payload: data,
    };
  },
);

export const getCategoryNewsRequest = createAction(
  types.GET_CATEGORY_NEWS_REQUEST,
  function prepare(data) {
    return {
      payload: data,
    };
  },
);
