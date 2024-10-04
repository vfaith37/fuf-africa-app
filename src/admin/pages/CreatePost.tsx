import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import EventModalForm from "./EventPost";
import BlogPostForm from "./BlogPost";
import ProjectPost from "./ProjectPost";

interface CreatePostProps {
  isAuth: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ isAuth }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setUserData] = useState<any>(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      // Parse the JSON string back into an object
      setUserData(null);
      navigate("/login");
    } 
  }, [navigate]);

  useEffect(() => {
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [isAuth, navigate]);
  console.log(auth);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-Roboto flex-col gap-6">
      {/* <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create A Post
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title:
          </label>
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Post:
          </label>
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="mb-2">
              <textarea
                placeholder={`Paragraph ${index + 1}...`}
                value={paragraph}
                onChange={(event) =>
                  handleParagraphChange(index, event.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              />
              <button
                type="button"
                onClick={() => removeParagraph(index)}
                className="text-red-500 mt-2"
              >
                Remove Paragraph
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addParagraph}
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
          >
            Add Paragraph
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image:
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={createPost}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Submit Post
        </button>
      </div> */}
      <BlogPostForm />
      <EventModalForm />
      <ProjectPost />
    </div>
  );
};

export default CreatePost;
