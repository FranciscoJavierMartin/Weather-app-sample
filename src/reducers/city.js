import { SET_CITY } from '../actions';

export const city = (state = {}, action) => {
    let res;

    switch (action.type) {
        case SET_CITY:
            res = { ...state, city: action.payload }
            break;
        default:
            res = state;
    }

    return res;
}