import React from "react";
import Background from "./Background";
import MenuAdmin from "./Admin/MenuAdmin";
import AdminMain from "./Admin/AdminMain";
import Cookies from "universal-cookie";

const Admin = () => {
    return(
        <>
            {/* Back ground */}
            <Background />

            <MenuAdmin />

            <AdminMain />
        </>
    )
}

export default Admin;