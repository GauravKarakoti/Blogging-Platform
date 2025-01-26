import React from "react";
import CreateUser from "../components/User/CreateUser";
import UserList from "../components/User/UserList";

const Users = () => {
    return (
        <div>
            <h1>Manage Users</h1>
            <CreateUser />
            <UserList />
        </div>
    );
};

export default Users;
