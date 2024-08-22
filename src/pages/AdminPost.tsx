import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../config/firebase";

interface Post {
  id: string;
  title: string;
  postText: string;
  author: {
    id: string;
    name: string;
  };
}

interface AdminPostProps {
  isAuth: boolean;
}

const AdminPost: React.FC<AdminPostProps> = ({ isAuth }) => {
  const [postLists, setPostList] = useState<Post[]>([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(
        data.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            postText: data.postText,
            author: {
              id: data.author.id,
              name: data.author.name,
            },
          } as Post;
        })
      );
    };

    getPosts();
  }, []);

  const deletePost = async (id: string) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPostList(postLists.filter((post) => post.id !== id)); // Remove the deleted post from the state
  };

  return (
    <div className="flex flex-col items-center">
      {postLists.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-3xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>
            {isAuth && post.author.id === auth.currentUser?.uid && (
              <button
                onClick={() => deletePost(post.id)}
                className="text-red-500 hover:text-red-700"
              >
                &#128465;
              </button>
            )}
          </div>
          <p className="text-gray-700 mt-4">{post.postText}</p>
          <h3 className="text-gray-600 mt-4">@{post.author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default AdminPost;
