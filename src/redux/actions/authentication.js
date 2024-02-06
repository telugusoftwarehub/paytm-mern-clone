import { LOGIN } from "../../configs/constants";

export function googleLogin(token) {
    return {
        type: LOGIN,
        payload: token
    }
}