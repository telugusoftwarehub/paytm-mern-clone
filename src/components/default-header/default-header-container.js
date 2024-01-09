import React, {useEffect, useState} from "react";
import DefaultHeaderComponent from "./default-header-component";

const DefaultHeaderContainer = () => {
    const [menuItems, setMenuItems]= useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetch("./responses/defaultNavLinks.json")
            .then(res => res.json())
            .then((response) => {
                setMenuItems(response.data);
            });
    }, []);


    const signInClickHandler = () => {
        setShowModal(!showModal)
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return <DefaultHeaderComponent
        menuItems={menuItems}
        signInClickHandler={signInClickHandler}
        closeModalHandler={closeModalHandler}
        showModal={showModal}
    />
}

export default DefaultHeaderContainer;