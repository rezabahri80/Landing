import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

const ItemModal = (props) => {

    const [addUserUserName, setAddUserUserName] = useState();
    const [addUserPassword, setAddUserPassword] = useState();
    const [addUserFirstName, setAddUserFirstName] = useState();
    const [addUserLastName, setAddUserLastName] = useState();
    const [addUserGroup, setAddUserGroup] = useState();
    const [addUserEmail, setAddUserEmail] = useState();

    const [addGroupName, setAddGroupName] = useState();
    const [addGroupRole, setAddGroupRole] = useState();

    const [addRoleName, setAddRoleName] = useState();

    const [userNameRequired, setUserNameRequired] = useState(false);
    const [emailRequired, setEmailRequired] = useState(false);
    const [passRequired, setPassNameRequired] = useState(false);

    const [groupNameRequired, setGroupNameRequired] = useState (false);
    const [groupRoleRequired, setGroupRoleRequired] = useState (false);

    const [roleNameRequired, setRoleNameRequired] = useState (false);

    const [showEdit, setShowEdit] = useState(false);

    const [editUserName, setEditUserName] = useState();
    const [editWalletAddress, setEditWalletAddress] = useState();
    const [editFirstName, setEditFirstName] = useState();
    const [editLastName, setEditLastName] = useState();

    const [editGroupName, setEditGroupName] = useState();
    const [editGroupRole, setEditGroupRole] = useState();

    const [editRoleName, setEditRoleName] = useState();


    const userItemDelete = (deleteProps) => {
        return(
            axios({
                method: 'delete',
                url: 'http://localhost:3000/User/'+`${deleteProps}`,
                headers: {}                
            }).then(res => {
                console.log(res);
                window.location.reload();

            }).catch(err => {
                console.log(err);

            })
        )
    }

    const groupItemDelete = (deleteProps) => {
        return(
            axios({
                method: 'delete',
                url: 'http://localhost:3000/Group/'+`${deleteProps}`,
                headers: {}                
            }).then(res => {
                console.log(res);
                window.location.reload();

            }).catch(err => {
                console.log(err);

            })
        )
    }

    const roleItemDelete = (deleteProps) => {
        return(
            axios({
                method: 'delete',
                url: 'http://localhost:3000/Role/'+`${deleteProps}`,
                headers: {}                
            }).then(res => {
                console.log(res);
                window.location.reload();

            }).catch(err => {
                console.log(err);

            })
        )
    }

    const editUserToggle = (editProps) => {
        if (showEdit) {
            return (
                axios({
                    method: 'put',
                    url: 'http://localhost:3000/User/'+`${editProps}`,
                    headers: {},
                    data: {
                        "username": `${editUserName == undefined ? props.data.username : editUserName}`,
                        "walletAddress": `${editWalletAddress == undefined ? props.data.walletAddress : editWalletAddress}`,
                        "firstName": `${editFirstName == undefined ? props.data.firstName : editFirstName}`,
                        "lastName": `${editLastName == undefined ? props.data.lastName : editLastName}`
                    }
                }).then(res => {
                    console.log(res);
                    window.location.reload();
    
                }).catch(err => {
                    console.log(err);
    
                })
            )
        } else {
            setShowEdit(!showEdit);
        }
    }

    const editGroupToggle = (editProps) => {
        if (showEdit) {
            return (
                axios({
                    method: 'put',
                    url: 'http://localhost:3000/Group/'+`${editProps}`,
                    headers: {},
                    data: {
                        "name": `${editGroupName == undefined ? props.data.name : editGroupName}`,
                        "role": `${editGroupRole == undefined ? props.data.role : editGroupRole}`
                    }
                }).then(res => {
                    console.log(res);
                    window.location.reload();
    
                }).catch(err => {
                    console.log(err);
    
                })
            )
        } else {
            setShowEdit(!showEdit);
        }
    }

    const editRoleToggle = (editProps) => {
        if (showEdit) {
            return(
                axios({
                    method: 'put',
                    url: 'http://localhost:3000/Role/'+`${editProps}`,
                    headers: {},
                    data: {
                        "name": `${editRoleName == undefined ? props.data.name : editRoleName}`
                    }
                }).then(res => {
                    console.log(res);
                    window.location.reload();
    
                }).catch(err => {
                    console.log(err);
    
                })
            )
        } else {
            setShowEdit(!showEdit);
        }
    }

    const addUser = () => {
        if (addUserUserName == undefined) {
            setUserNameRequired(true);

        } else if (addUserPassword == undefined) {
            setUserNameRequired(false);
            setPassNameRequired(true);

        } else if (addUserEmail == undefined) {
            setPassNameRequired(false);
            setUserNameRequired(false);
            setEmailRequired(true);
            
        } else {
            return (
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/User',
                    headers: {},
                    data: {
                        "username": `${addUserUserName}`,
                        "email": `${addUserEmail}`,   
                        "password": `${addUserPassword}`,
                        "group": `${addUserGroup}`,
                        "firstName": `${addUserFirstName}`,
                        "lastName": `${addUserLastName}`
                    }
                }).then(res => {
                    console.log(res);
                    window.location.reload();
        
                }).catch(err => {
                    console.log(err);
        
                })
            )
        }
    }

    const addGroup = () => {
        if (addGroupName == undefined) {
            setGroupNameRequired(true);

        } else if (addGroupRole == undefined) {
            setGroupNameRequired(false);
            setGroupRoleRequired(true);

        } else {
            return(
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/Group',
                    headers: {},
                    data: {
                        "name": `${addGroupName}`,
                        "role": `${addGroupRole}`
                    }
                }).then(res => {
                    console.log(res);
                    window.location.reload();
        
                }).catch(err => {
                    console.log(err);
        
                })
            )
        }
    }

    const addRole = () => {
        if (addRoleName == undefined) {
            setRoleNameRequired(true);

        } else {
            return (
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/Role',
                    headers: {},
                    data: {
                        "name": `${addRoleName}`
                    }
                }).then(res => {
                    console.log(res);
                    window.location.reload();
        
                }).catch(err => {
                    console.log(err);
        
                })
            )
        }
    }

    if (props.type == "user") {
        return(
            <Modal
                onClick={e => e.stopPropagation()}
                show = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User Name: {props.data.username}
                        {/* {props.data.id} */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="userBodyTop">
                        <div>
                            <img src={props.data.imageUrl}></img>
                        </div>
                        <div>
                            <div>
                                <span>
                                    Id: {props.data.id}
                                </span>
                            </div>
                            <div>
                                {/* {editEnable? "User Name:"+<input></input> : `User Name: ${props.data.username}`} */}
                                <span>
                                    User Name: {showEdit ? <input placeholder="Enter New User Name" onInput={e => setEditUserName(e.target.value)}></input> : props.data.username}
                                </span>
                            </div>
                            <div>
                                {/* First Name: {props.data.firstName} */}
                                <span>
                                    First Name: {showEdit ? <input placeholder="Enter New First Name" onInput={e => setEditFirstName(e.target.value)}></input> : props.data.firstName}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Last Name: {showEdit ? <input placeholder="Enter New Last Name" onInput={e => setEditLastName(e.target.value)}></input> : props.data.lastName}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="userBodybuttom">
                        <div>
                            <div>
                                <span>
                                    Role: {props.data.role}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Group: {props.data.group}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>
                                    E-mail: {props.data.email}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Wallet Address: {showEdit ? <input placeholder="Enter New Wallet Address" onInput={e => setEditWalletAddress(e.target.value)}></input> : props.data.walletAddress}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Creat At: {props.data.createdAt}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Updated At: {props.data.updatedAt}
                                </span>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={(e) => {e.preventDefault(); userItemDelete(props.data.id)}}>
                        Delete
                    </button>
                    <button onClick={(e) => {e.preventDefault(); editUserToggle(props.data.id)}}>
                        {showEdit ? "Save Edit" : "Edit"}
                    </button>
                </Modal.Footer>
            </Modal>
        )
    } else if (props.type == "group") {
        return (
            <Modal
                onClick={e => e.stopPropagation()}
                show = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Group Name: {props.data.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="groupBody">
                        <div>
                            <span>
                                Id: {props.data.id}
                            </span>
                        </div>
                        <div>
                            <span>
                                Name: {showEdit ? <input placeholder="Enter Name" onInput={e => setEditGroupName(e.target.value)}></input> : props.data.name}
                            </span>
                        </div>
                        <div>
                            <span>
                                Role: {showEdit ? <input placeholder="Enter Role" onInput={e => setEditGroupRole(e.target.value)}></input> : props.data.role}
                            </span>
                        </div>
                        <div>
                            <span>
                                Creat At: {props.data.createdAt}
                            </span>
                        </div>
                        <div>
                            <span>
                                Update At: {props.data.updatedAt}
                            </span>
                        </div>
                        <div>
                            <span>
                                Is Active: {props.data.isActive}
                            </span>
                        </div>
                        <div>
                            <span>
                                Is Updatable: {props.data.isUpdatable}
                            </span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={(e) => {e.preventDefault(); groupItemDelete(props.data.id)}}>
                        Delete
                    </button>
                    <button onClick={(e) => {e.preventDefault(); editGroupToggle(props.data.id)}}>
                        {showEdit ? "Save Edit" : "Edit"}
                    </button>
                </Modal.Footer>
            </Modal>
        )
    } else if (props.type == "role") {
        return(
            <Modal
                onClick={e => e.stopPropagation()}
                show = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Role Name: {props.data.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="roleBody">
                        <div>
                            <span>
                                Id: {props.data.id}
                            </span>
                        </div>
                        <div>
                            <span>
                                Name: {showEdit ? <input placeholder="Enter Role Name" onInput={e => setEditRoleName(e.target.value)}></input> : props.data.name}
                            </span>
                        </div>
                        <div>
                            <span>
                                Is Active: {props.data.isActive}
                            </span>
                        </div>
                        <div>
                            <span>
                                Is Updatable: {props.data.isUpdatable}
                            </span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={(e) => {e.preventDefault(); roleItemDelete(props.data.id)}}>
                        Delete
                    </button>
                    <button onClick={(e) => {e.preventDefault(); editRoleToggle(props.data.id)}}>
                        {showEdit ? "Save Edit" : "Edit"}
                    </button>
                </Modal.Footer>
            </Modal>
        )
    } else if (props.type == "addUser") {
        return (
            <Modal
                onClick={e => e.stopPropagation()}
                show = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="addUser">
                        <div>
                            User Name: 
                            <input style={{marginLeft: "10px"}} placeholder="Enter User Name" onInput={e => setAddUserUserName(e.target.value)}></input>
                            <span style={userNameRequired ? {display: "inline-block"} : null}>* Required *</span>
                        </div>
                        <div>
                            Password: 
                            <input style={{marginLeft: "18px"}} placeholder="Enter User Name" onInput={e => setAddUserPassword(e.target.value)}></input>
                            <span style={passRequired ? {display: "inline-block"} : null}>* Required *</span>
                        </div>
                        <div>
                            First Name:
                            <input style={{marginLeft: "10px"}} placeholder="Enter User Name" onInput={e => setAddUserFirstName(e.target.value)}></input>
                        </div>
                        <div>
                            Last Name:
                            <input style={{marginLeft: "10px"}} placeholder="Enter User Name" onInput={e => setAddUserLastName(e.target.value)}></input>
                        </div>
                        <div>
                            Group:
                            <input style={{marginLeft: "46px"}} placeholder="Enter User Name" onInput={e => setAddUserGroup(e.target.value)}></input>
                        </div>
                        <div>
                            E - mail:
                            <input style={{marginLeft: "33px"}} placeholder="Enter User Name" onInput={e => setAddUserEmail(e.target.value)}></input>
                            <span style={emailRequired ? {display: "inline-block"} : null}>* Required *</span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" onClick={(e) => {e.preventDefault(); addUser();}}>
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
        )
    } else if (props.type == "addGroup") {
        return (
            <Modal
                onClick={e => e.stopPropagation()}
                show = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new Group
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="addGroup">
                        <div>
                            Name:
                            <input placeholder="Enter Group Name" onInput={e => setAddGroupName(e.target.value)}></input>
                            <span style={groupNameRequired ? {display: "inline-block"} : null}>* Required *</span>
                        </div>
                        <div>
                            Role:
                            <input placeholder="Enter Group Role" onInput={e => setAddGroupRole(e.target.value)}></input>
                            <span style={groupRoleRequired ? {display: "inline-block"} : null}>* Required *</span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" onClick={(e) => {e.preventDefault(); addGroup();}}>
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
        )
    } else if (props.type == "addRole") {
        return (
            <Modal
                onClick={e => e.stopPropagation()}
                show = {true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add New Role
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="addRole">
                        <div>
                            Name:
                            <input placeholder="Enter Role Name" onInput={e => setAddRoleName(e.target.value)}></input>
                            <span style={roleNameRequired ? {display: "inline-block"} : null}>* Required *</span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" onClick={(e) => {e.preventDefault(); addRole();}}>
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ItemModal;
