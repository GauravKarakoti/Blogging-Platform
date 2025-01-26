import React, { useState } from "react";
import { createArticle } from "../../api/articleApi";

const CreateArticle = () => {
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        user:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createArticle(formData);
            alert(response.data.Message);
        } catch (err) {
            alert("Error creating article!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <input type="text" placeholder="Description" onChange={(e) => setFormData({...formData, description: e.target.value})} required />
            <input type="text" placeholder="User" onChange={(e) => setFormData({...formData, user: e.target.value})} required />
            <button type="submit">Create Article</button>
        </form>
    );
};

export default CreateArticle;
