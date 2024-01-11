import ModalComponent from "./modal-component";
import { useGoogleLogin } from '@react-oauth/google';

const ModalContainer = (props) => {
    const login = useGoogleLogin({
        onSuccess: codeResponse => {
          console.log(codeResponse)
        },
        flow: 'auth-code',
      });

    return <ModalComponent {...props} login={login} />;
}

export default ModalContainer;