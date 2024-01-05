import defaultLogo from "../../images/logo.svg";
import Nav from "../common/nav";
import Logo from "../common/logo";

const DefaultHeaderComponent = (props) => {
    return <div className="flex">
        <Logo src={defaultLogo} />
        <Nav menuItems={props.menuItems} />
        <div className="btnSignIn">
            <button>Sign In</button>
        </div>
    </div>
}

export default DefaultHeaderComponent;