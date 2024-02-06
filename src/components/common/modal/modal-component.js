import { MODAL_HEADING_TXT } from "../../../configs/constants";
// import { loginForm } from "../../../configs/forms/login-form";
import { Row, Button } from "reactstrap";
// import { validate } from "../../../utils/helper";
import "./modal-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const ModalComponent = (props) => {
    const [singInForm, setSingInForm] = useState([{
        type: "text",
        label: "User Name",
        name: "username",
        id: "username",
        validations: ["required", "maxLength"],
        classes: [],
        isValid: true,
        maxLenth: 20,
        msg: ""
    }, {
        type: "password",
        label: "Password",
        name: "password",
        id: "password",
        validations: ["required"],
        classes: [],
        isValid: true,
        msg: ""
    }]);

    const validate = (event) => {
        singInForm.forEach((field) => {
            if (field.name === event.target.name) {
                if ((field.validations.indexOf('required') !== -1) && event.target.value === "") {
                    field.isValid = false;
                    field.msg = "Required Error"
                } else {
                    field.isValid = true;
                    field.msg = ""
                }

                if ((field.validations.indexOf('maxLength') !== -1 && event.target.value.length > field.maxLenth)) {
                    field.isValid = false;
                    field.msg = "Max Length Error"
                }
            }
        })

        setSingInForm([...singInForm]);
    }

    return <>
        <div className="mask"></div>
        <div className="modal-wrap">
            <h2 className="heading text-center">
                {MODAL_HEADING_TXT}
                <span className="position-absolute" href="#" onClick={(event) => props.closeEventHandler(event)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </span>
            </h2>
            <div className="login-panel p-3">
                <div className="row">
                    <div className="col">
                        <h4>Steps to scan QR Code</h4>
                        <ol>
                            <li>Open Paytm App</li>
                            <li>Tap Scan option available at the bottom</li>
                            <li>Point Paytm Scan at QR Code to login</li>
                        </ol>
                    </div>
                    <div className="col">
                        {
                            singInForm.length > 0 && singInForm.map((item) => {
                                return <Row>
                                    <label for={item.id}>{item.label}</label>
                                    <input onBlur={(event) => validate(event)} type={item.type} name={item.name} id={item.id} />
                                    {!item.isValid && <p className="error"> {item.msg} </p>}
                                </Row>
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col">&nbsp;</div>
                    <div className="col">
                        <div className="grid gap-0 row-gap-3">
                            <div className="p-2 g-col-6">
                                <button className="loginBtn" onClick={props.fetchLogin}> SSO </button>
                            </div>
                            <div className="p-2 g-col-6" onClick={() => props.login()}>
                                {/* <i class="bi bi-x-square-fill"></i>
                             */}
                                <FontAwesomeIcon icon={faGoogle} />
                                {/* <FontAwesomeIcon icon=""/> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-Google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">By signing in, you agree to our privacy policy and terms of use</div>
            <div className="mobile-app">
                To create an account download Paytm App
            </div>
        </div>
    </>
}

export default ModalComponent;