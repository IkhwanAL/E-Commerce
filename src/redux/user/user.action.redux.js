import { userTypes } from './user.types.redux'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});
