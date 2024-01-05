import React, {useEffect, useState} from "react";
import DefaultHeaderComponent from "./default-header-component";

const DefaultHeaderContainer = () => {
    const [menuItems, setMenuItems]= useState([]);

    useEffect(() => {
        fetch("./responses/defaultNavLinks.json")
            .then(res => res.json())
            .then((response) => {
                setMenuItems(response.data);
            });
    }, []);

    return <DefaultHeaderComponent menuItems={menuItems} />
}

export default DefaultHeaderContainer;