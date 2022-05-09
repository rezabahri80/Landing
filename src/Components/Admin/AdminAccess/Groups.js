import React, {useEffect, useState} from "react";
import ItemModal from "./ItemModal";

const Groups = (dataGroups) => {

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
        console.log("log Groups", dataGroups);

    }, []);

    return(
        <>
            <div className="itemHeader">
                <h1>
                    Group Name:
                </h1>
                <h1>
                    Group Id:
                </h1>
                <h1>
                    Role Name:
                </h1>
            </div>
            {dataGroups.dataGroups.map((item) => {
                return(
                    <div className="items">
                        <h1>
                            {item.name}
                        </h1>
                        <h1>
                            {item.id}
                        </h1>
                        <h1>
                            {item.role}
                        </h1>
                        <h1 onClick={(e) => {e.preventDefault(); handleToggle(item)}} id={`${item.id}`}>
                            read more ...
                            {itemHandler == `${item.id}` ? openItem? <ItemModal type={"group"} data={item} show={openItem}/> : null : null}
                        </h1>
                    </div>
                )
            })}
            <div className="addNew">
                <button onClick={(e) => {e.preventDefault(); handleToggleAdd();}}>
                    + Add new Group
                    {openAdd ? <ItemModal type={"addGroup"} show={openAdd}/> : null}
                </button>
            </div>
        </>
    )
}

export default Groups;