import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Blogging Platform</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        A platform where users can create articles, share thoughts, and comment on blogs.
      </p>
      <div className="space-x-4">
        <Link
          to="/users"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          View Users
        </Link>
        <Link
          to="/articles"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          View Articles
        </Link>
        <Link
          to="/create-article"
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
        >
          Create Article
        </Link>
      </div>
    </div>
  );
};

export default Home;
