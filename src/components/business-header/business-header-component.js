import businessLogo from "../../images/business-website-logo.svg";
import Nav from "../common/nav";
// import { businessNavLinks } from "../../configs/navlinks";
import Logo from "../common/logo";

const BusinessHeaderComponent = (props) => {
    return <div className="flex">
        <Logo src={businessLogo} />
        <Nav menuItems={props.menuItems} />
        <div className="btnSignIn">
            <button>Sign In</button>
        </div>
    </div>
}

export default BusinessHeaderComponent;