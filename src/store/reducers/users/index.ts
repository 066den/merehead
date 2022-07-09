import { IUser } from './../../../types/user';
import { UserActionEnum, UsersAction, UsersState } from './types';
const initialState: UsersState = {
  users: [],
  user: {} as IUser,
  isLoading: false,
  error: '',
};

export default function usersReducer(
  state = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case UserActionEnum.SET_USERS:
      return { ...state, users: action.payload };
    case UserActionEnum.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
