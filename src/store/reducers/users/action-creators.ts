import { IUser } from './../../../types/user';
import {
  UserActionEnum,
  SetUsersAction,
  FetchUsersAction,
  SetUserAction,
  FetchUserAction,
} from './types';

export const userActionCreators = {
  setUsers: (users: IUser[]): SetUsersAction => ({
    type: UserActionEnum.SET_USERS,
    payload: users,
  }),
  fethUsers: (): FetchUsersAction => ({
    type: UserActionEnum.FETCH_USERS,
  }),

  setUser: (user: IUser): SetUserAction => ({
    type: UserActionEnum.SET_USER,
    payload: user,
  }),

  fethUser: (id: number): FetchUserAction => ({
    type: UserActionEnum.FETCH_USER,
    payload: id,
  }),
};
