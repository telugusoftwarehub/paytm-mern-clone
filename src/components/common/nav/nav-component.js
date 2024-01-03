const NavComponent = ({ menuItems }) => {
    return <nav className="nav">
        <ul className="flex nav-links">
            {
                menuItems.length > 0 && menuItems.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </nav>
}

export default NavComponent;