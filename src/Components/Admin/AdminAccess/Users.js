import React, {useEffect, useState} from "react";
import ItemModal from "./ItemModal";
import axios from "axios";

const Users = (dataUsers) => {
    
    const [openItem, setOpenItem] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [itemHandler, setItemHandler] = useState();

    const handleToggle = (item) => {
        setOpenItem(!openItem)
        setItemHandler(item.id)

    }

    const handleToggleAdd = () => {
        setOpenAdd(!openAdd);

    }

    useEffect(() => {
        console.log("log user", dataUsers);

    }, []);
    
    return(
        <>
            <div className="itemHeader">
                <h1>
                    User Name:
                </h1>
                <h1>
                    User Id:
                </h1>
                <h1>
                    Email:
                </h1>
            </div>
            {dataUsers.dataUsers.map((item) => {
                return(
                    <div className="items">
                        <h1>
                            {item.username}
                        </h1>
                        <h1>
                            {item.id}
                        </h1>
                        <h1>
                            {item.email}
                        </h1>
                        <h1 onClick={(e) => {e.preventDefault(); handleToggle(item)}} id={`${item.id}`}>
                            read more ...
                            {itemHandler == `${item.id}` ? openItem? <ItemModal type={"user"} data={item} show={openItem}/> : null : null}
                        </h1>
                    </div>
                )
            })}
            <div className="addNew">
                <button onClick={(e) => {e.preventDefault(); handleToggleAdd();}}>
                    + Add new User
                    {openAdd ? <ItemModal type={"addUser"} show={openAdd}/> : null}
                </button>
            </div>
        </>
    )
}

export default Users;