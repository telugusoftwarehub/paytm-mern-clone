import React, {useEffect, useState} from "react";
import BusinessHeaderComponent from "./business-header-component";

const BusinessHeaderContainer = () => {
    const [menuItems, setMenuItems]= useState([]);

    useEffect(() => {
        fetch("./responses/businessNavLinks.json")
            .then(res => res.json())
            .then((response) => {
                setMenuItems(response.data);
            });
    }, []);

    return <BusinessHeaderComponent menuItems={menuItems}/>
}

export default BusinessHeaderContainer;