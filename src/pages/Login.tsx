import React, { useState } from "react";
import { auth, db } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

interface LoginProps {
  setIsAuth: (value: boolean) => void;
  setIsAdmin: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuth, setIsAdmin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
       // if (email === "vfaith37@gmail.com") {
          localStorage.setItem("isAdmin", "true");
          localStorage.setItem("isAuth", "true");
          setIsAdmin(true);
       // }
        const user = userCredential.user;
        console.log(12, user);
        
        setIsAuth(true); // Update auth state
        console.log("User signed in:", user);
        fetchUserData();
        navigate("/admin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
      });
  };
  const fetchUserData = async () => {
    // Ensure the user is authenticated
    const currentUser = auth.currentUser;

    if (currentUser) {
      const uid = currentUser.uid;

      try {
        // Get the document reference for the current user
        const userDocRef = doc(db, "users", uid);

        // Fetch the document data
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          // Access the data
          const userData = userDoc.data();
          console.log("User Data:", userData);
          localStorage.setItem("userData", JSON.stringify(userData));
        //   return userData; // You can return or use this data as needed
        } else {
          console.log("No user data found for the current user.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    } else {
      console.log("No user is currently authenticated.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-Roboto">
      <p className="text-lg mb-6 text-gray-700">
        Sign In With Email to Continue
      </p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6 p-2 border rounded-lg"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => signIn(email, password)}
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
