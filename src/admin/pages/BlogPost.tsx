import React, { useEffect, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth, storage } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Modal from "../../components/Modal";
// import Modal from "../components/Modal"; // Assuming you have a modal component

const BlogPostForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [paragraphs, setParagraphs] = useState<string[]>([""]);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false); 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    } else {
      navigate("/login");
    }
  }, [navigate]);

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
    setLoading(true);
    let imageUrl = "";

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(postsCollectionRef, {
      title,
      paragraphs,
      imageUrl,
      author: {
        name: auth.currentUser?.displayName || "Jane Doe",
        profileImageUrl: auth.currentUser?.photoURL || "Jane Doe",
        id: auth.currentUser?.uid || "12345678987654323",
        position: userData?.position,
      },
      timestamp: Timestamp.now(),
    });

    setLoading(false);
    setShowModal(false); // Close modal after submission
    navigate("/admin/post");
  };

  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Add New Blog Post
      </button>
      {showModal && (
        <Modal>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold mb-4 text-center">
                Create A Blog Post
              </h1>
              <button
                onClick={() => setShowModal(false)}
                className="text-red-500 text-lg"
              >
                &#x2715; {/* Close (X) icon */}
              </button>
            </div>
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
              disabled={loading}
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            >
              {loading ? "Submitting..." : "Submit Post"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BlogPostForm;
