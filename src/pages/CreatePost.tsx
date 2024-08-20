import React, { useState, useEffect } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../config/firebase";

interface CreatePostProps {
  isAuth: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ isAuth }) => {
  const [title, setTitle] = useState<string>("");
  const [postText, setPostText] = useState<string>("");

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser?.displayName || "",
        id: auth.currentUser?.uid || "",
      },
      timestamp: Timestamp.now(), // Add timestamp here
    });
    navigate("/admin/post");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [isAuth, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Create A Post</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Post:</label>
          <textarea
            placeholder="Post..."
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
          />
        </div>
        <button
          onClick={createPost}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
