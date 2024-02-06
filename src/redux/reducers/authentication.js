import { LOGIN } from "../../configs/constants";

const initialState = {
    isLoggedIn: false,
    token: null
}

const GoogleLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload
            }
        default:
            return state
    }
}

export default GoogleLoginReducer;