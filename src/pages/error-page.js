import { ERROR_CODE_404, ERROR_MSG_NF } from "../configs/constants";

const ErrorPage = () => {
    return <h1> {ERROR_CODE_404} : {ERROR_MSG_NF} </h1>
}

export default ErrorPage;