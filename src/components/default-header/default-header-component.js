import defaultLogo from "../../images/logo.svg";
import Nav from "../common/nav";
import Logo from "../common/logo";
import Modal from "../common/modal";

const DefaultHeaderComponent = (props) => {
    return <div className="flex">
        <Logo src={defaultLogo} />
        <Nav menuItems={props.menuItems} />
        <div className="btnSignIn">
            <button onClick={props.signInClickHandler}>Sign In</button>
            {props.showModal && <Modal closeEventHandler={props.closeModalHandler} />}
        </div>
    </div>
}

export default DefaultHeaderComponent;