import {
    LOGIN_USER, REGISTER_USER
} from '../_actions/types'

export default function (state={}, action){
    switch (action.type) {
        case LOGIN_USER:
                return {...state, loginSuccess: action.payload} //그냥 똑같이 나타냄 스프레드 오퍼
        case REGISTER_USER:
                return {...state, register : action.payload}
    
        default:
            return state;
    }
}