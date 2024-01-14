import ModalComponent from "./modal-component";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ModalContainer = (props) => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: response => {
      console.log(response);
      localStorage.setItem('oauth_token', response.code);
      navigate('/dashboard');
    },
    onError: (response) => {
      console.log(response)
    },
    flow: 'auth-code',
  });

  const fetchLogin = () => {
    //GET, POST, PUT/PATCH, DELETE
    //http request
    //json, html, xml, text
    fetch('https://dummyjson.com/products/1', {
      method: "PUT",
      "Content-Type": "application/text"
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        navigate('/dashboard');
      })

    // axios.get("./responses/logindata.json").then((response) => {
    //   const { data } = response;

    //   if (data.token) {
    //     localStorage.setItem("token", data.token);
    //     navigate('/dashboard');
    //   }
    // })
  }

  return <ModalComponent
    {...props}
    login={login}
    fetchLogin={fetchLogin} />;
}

export default ModalContainer;