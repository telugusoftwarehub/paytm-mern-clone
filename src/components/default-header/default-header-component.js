import defaultLogo from "../../images/logo.svg";
import Nav from "../common/nav";
import Logo from "../common/logo";
import Modal from "../common/modal";
import singinlogo from "../../images/loginImg.svg";

const DefaultHeaderComponent = (props) => {
    return <div className="d-flex">
        <Logo src={defaultLogo} />
        <Nav menuItems={props.menuItems} />
        <div className="btnSignIn">
            <div className="btn d-flex">
                <span onClick={props.signInClickHandler}>Sign In</span>
                <img src={singinlogo} alt="Sign In" />
            </div>
            {/* <Modal /> */}
        </div>
        {props.showModal && <Modal closeEventHandler={props.closeModalHandler} />}

    </div>
}

export default DefaultHeaderComponent;