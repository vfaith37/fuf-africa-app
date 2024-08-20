import React, { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuth: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user);
        localStorage.setItem("isAuth", "true");
        navigate("/admin");
        setIsAuth(true); // Update auth state
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
      });
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
