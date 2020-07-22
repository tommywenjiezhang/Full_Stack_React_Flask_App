import * as UserActionHelper from './actionHelpers'

export const userPostFetch = user => dispatch => UserActionHelper._user_login(dispatch,user)
export const userRegister = user => dispatch => UserActionHelper._user_register(dispatch,user)


