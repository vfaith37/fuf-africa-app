import React, { useState, useEffect } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth, storage } from "../config/firebase"; // Import storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface CreatePostProps {
  isAuth: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ isAuth }) => {
  const [title, setTitle] = useState<string>("");
  const [paragraphs, setParagraphs] = useState<string[]>([""]); // State for multiple paragraphs
  const [image, setImage] = useState<File | null>(null); // State for image

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleParagraphChange = (index: number, value: string) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index] = value;
    setParagraphs(updatedParagraphs);
  };

  const addParagraph = () => {
    setParagraphs([...paragraphs, ""]);
  };

  const removeParagraph = (index: number) => {
    setParagraphs(paragraphs.filter((_, i) => i !== index));
  };

  const createPost = async () => {
    let imageUrl = "";
    
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(postsCollectionRef, {
      title,
      paragraphs, // Save the paragraphs
      imageUrl, // Save the image URL
      author: {
        name: auth.currentUser?.displayName || "",
        id: auth.currentUser?.uid || "",
      },
      timestamp: Timestamp.now(),
    });

    navigate("/admin/post");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [isAuth, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-Roboto">
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
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="mb-2">
              <textarea
                placeholder={`Paragraph ${index + 1}...`}
                value={paragraph}
                onChange={(event) => handleParagraphChange(index, event.target.value)}
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Image:</label>
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
      </div>
    </div>
  );
};

export default CreatePost;
