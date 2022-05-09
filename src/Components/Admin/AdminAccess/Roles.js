import React, {useEffect, useState} from "react";
// import Modal from "react-bootstrap/Modal";
// import { Modal } from 'react-bootstrap';
import ItemModal from "./ItemModal";

const Roles = (dataRoles) => {

    // const [shoe, setShow] = useState(false);

    const [openItem, setOpenItem] = useState(false);
    const [itemHandler, setItemHandler] = useState();
    const [openAdd, setOpenAdd] = useState(false);

    const handleToggle = (item) => {
        setOpenItem(!openItem)
        setItemHandler(item.id)

    }

    const handleToggleAdd = () => {
        setOpenAdd(!openAdd);

    }

    useEffect(() => {
        console.log("log Role", dataRoles);

    }, []);

    return(
        <>
            <div className="itemHeader">
                <h1>
                    Role Name:
                </h1>
                <h1>
                    Role Id:
                </h1>
            </div>
            {dataRoles.dataRoles.map((item) => {
                return(
                    <div className="items">
                        <h1>
                            {item.name}
                        </h1>
                        <h1>
                            {item.id}
                        </h1>
                        <h1>
                            {/* Role: {item.role} */}
                        </h1>
                        <h1 onClick={(e) => {e.preventDefault(); handleToggle(item)}} id={`${item.id}`}>
                            read more ...
                            {itemHandler == `${item.id}` ? openItem? <ItemModal type={"role"} data={item} show={openItem}/> : null : null}
                        </h1>
                    </div>
                )
            })}
            <div className="addNew">
                <button onClick={(e) => {e.preventDefault(); handleToggleAdd();}}>
                    + Add new Role
                    {openAdd ? <ItemModal type={"addRole"} show={openAdd}/> : null}
                </button>
            </div>
        </>
    )
}

export default Roles;