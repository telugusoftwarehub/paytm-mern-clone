import defaultLogo from "../../images/logo.svg";
import Nav from "../common/nav";
import { defaultNavLinks } from "../../configs/navlinks";
import Logo from "../common/logo";

const DefaultHeaderComponent = () => {
    return <div className="flex">
        <Logo src={defaultLogo} />
        <Nav menuItems={defaultNavLinks} />
        <div className="btnSignIn">
            <button>Sign In</button>
        </div>
    </div>
}

export default DefaultHeaderComponent;