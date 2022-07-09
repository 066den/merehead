import { IUser } from './../../../types/user';
export interface UsersState {
  users: IUser[];
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum UserActionEnum {
  SET_USERS = 'SET_USERS',
  FETCH_USERS = 'FETCH_USERS',
  SET_USER = 'SET_USER',
  FETCH_USER = 'FETCH_USER',
}

export interface SetUsersAction {
  type: UserActionEnum.SET_USERS;
  payload: IUser[];
}

export interface SetUserAction {
  type: UserActionEnum.SET_USER;
  payload: IUser;
}

export interface FetchUsersAction {
  type: UserActionEnum.FETCH_USERS;
}

export interface FetchUserAction {
  type: UserActionEnum.FETCH_USER;
  payload: number;
}

export type UsersAction =
  | SetUsersAction
  | FetchUsersAction
  | SetUserAction
  | FetchUserAction;
