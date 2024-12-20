import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

interface Post {
  id: string;
  title: string;
  postText: string;
  imageUrl?: string;
  paragraphs: string[];
  author: {
    id: string;
    name: string;
    position: string;
    profileImageUrl?: string;
  };
  timestamp: {
    seconds: number;
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
      try {
        const data = await getDocs(postsCollectionRef);
        setPostList(
          data.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              title: data.title,
              postText: data.postText,
              imageUrl: data.imageUrl,
              paragraphs: data.paragraphs || [], // Default to empty array if undefined
              author: {
                id: data.author.id,
                name: data.author.name,
                position: data.author.position,
                profileImageUrl: data.author.profileImageUrl, // Optional
              },
              timestamp: data.timestamp || { seconds: 0 }, // Default to empty timestamp if undefined
            } as Post;
          })
        );
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  const deletePost = async (id: string) => {
    try {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
      setPostList(postLists.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      {postLists.map((post) => {
        const postDate = post.timestamp?.seconds
          ? new Date(post.timestamp.seconds * 1000)
          : new Date(); // Use current date if timestamp is invalid

        return (
          <main
            key={post.id}
            className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white text-black antialiased font-Roboto flex-col flex"
          >
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
              <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                  <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm">
                      <img
                        className="mr-4 w-16 h-16 rounded-full"
                        src={post.author.profileImageUrl}
                        alt={post.author.name}
                      />
                      <div>
                        <a href="#" rel="author" className="text-xl font-bold">
                          @{post.author.name}
                        </a>
                        <p className="text-base ">{post.author.position}</p>
                        <p className="text-base">
                          <time
                            dateTime={postDate.toISOString()}
                            title={postDate.toDateString()}
                          >
                            {postDate.toDateString()}
                          </time>
                        </p>
                      </div>
                    </div>
                  </address>

                  <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl">
                    {post.title}
                  </h1>
                  {post.imageUrl && (
                    <figure>
                      <img
                        src={post.imageUrl}
                        alt="Post image"
                        className="rounded-lg"
                      />
                      {/* <figcaption className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                      Digital art by Anonymous
                    </figcaption> */}
                    </figure>
                  )}
                </header>
                {post.paragraphs.map((para, index) => (
                  <p key={index} className="lead mb-3">
                    {para}
                  </p>
                ))}
              </article>
            </div>
            {isAuth && post.author.id === auth.currentUser?.uid && (
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors self-center"
              >
                Delete
              </button>
            )}
          </main>
        );
      })}
    </>
  );
};

export default AdminPost;
