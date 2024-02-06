import ModalComponent from "./modal-component";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { googleLogin } from "../../../redux/actions/authentication";
import useFetch from "../../../hooks/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ModalContainer = (props) => {
  const [apiCall, setAPICall] = useFetch(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    // console.log('apiData: ', apiData)
    // setAPICall("https://dummyjson.com/products/1");
    dispatch(googleLogin("12345"))
    navigate('/dashboard');


    //GET, POST, PUT/PATCH, DELETE
    //http request
    //json, html, xml, text
    

    // axios.get("./responses/logindata.json").then((response) => {
    //   const { data } = response;

    //   if (data.token) {
    //     localStorage.setItem("token", data.token);
    //     navigate('/dashboard');
    //   }
    // })
  }

  const getData = () => {
    setAPICall({
      url: "https://dummyjson.com/products/1",
      method: "GET"
    });

  }

  return <ModalComponent
    {...props}
    login={login}
    fetchLogin={fetchLogin} />;
}

export default ModalContainer;