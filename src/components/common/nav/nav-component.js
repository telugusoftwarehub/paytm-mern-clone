import { Link } from "react-router-dom";

const NavComponent = ({ menuItems }) => {
    return <nav className="nav">
        {menuItems.length === 0 && "Loading...."}
        <ul className="d-flex nav-links">
            {
                menuItems.length > 0 && menuItems.map((item) => {
                    const template = () => {
                        if (item === "Paytm  for Business") {
                            return <Link to="/business">{item}</Link>
                        } else {
                            return item;
                        }
                    }
                    return <li>{template()}</li>
                })
            }
        </ul>
    </nav>
}

export default NavComponent;