import React, { useState } from "react";
import { createComment } from "../../api/commentApi";

const CreateComment = () => {
    const [formData, setFormData] = useState({
        comment:"",
        user:"",
        blog:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createComment(formData);
            alert(response.data.Message);
        } catch (err) {
            alert("Error creating comment!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Comment" onChange={(e) => setFormData({...formData, comment: e.target.value})} required />
            <input type="text" placeholder="User" onChange={(e) => setFormData({...formData, user: e.target.value})} required />
            <input type="text" placeholder="Blog" onChange={(e) => setFormData({...formData, blog: e.target.value})} required />
            <button type="submit">Create Comment</button>
        </form>
    );
};

export default CreateComment;
