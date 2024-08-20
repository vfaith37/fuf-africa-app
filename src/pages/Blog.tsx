import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

interface Post {
  id: string;
  title: string;
  postText: string;
  author: {
    name: string;
  };
}

const Blog: React.FC = () => {
  const [postLists, setPostList] = useState<Post[]>([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Post)));

      setPostList(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Post))
      );
    };

    getPosts();
  }, []); // Removed deletePost from dependency array

  //   const deletePost = async (id: string) => {
  //     const postDoc = doc(db, "posts", id);
  //     await deleteDoc(postDoc);
  //   };

  return (
    <>
      <div className="BlogPage h-screen">
        {postLists.map((post) => (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post?.author?.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
