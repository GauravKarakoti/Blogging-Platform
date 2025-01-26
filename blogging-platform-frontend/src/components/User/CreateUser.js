import React, { useState } from "react";
import { createUser } from "../../api/userApi";

const CreateUser = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createUser(formData);
            alert(response.data.Message);
        } catch (err) {
            alert("Error creating user!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
            <input type="text" placeholder="Last Name" onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
            <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <input type="text" placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} required />
            <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUser;
