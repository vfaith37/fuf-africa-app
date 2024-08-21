import React, { useState } from "react";
import { auth, db, storage } from "../../config/firebase"; // Ensure you have these configured
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface CreateUserProps {
  isAdmin: boolean;
  isAuth: boolean;
}

const CreateUser: React.FC<CreateUserProps> = ({ isAdmin, isAuth }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfileImage(e.target.files[0]);
    }
  };

  const createUser = async () => {
    if (!isAdmin && !isAuth) {
      console.error("Access denied. Only admins can create users.");
      return;
    }

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Upload profile image to Firebase Storage
      let profileImageUrl = "";
      if (profileImage) {
        const storageRef = ref(storage, `profile_images/${user.uid}`);
        await uploadBytes(storageRef, profileImage);
        profileImageUrl = await getDownloadURL(storageRef);
      }

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: profileImageUrl,
      });

      // Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        dob,
        position,
        profileImageUrl,
        createdAt: new Date().toISOString(),
      });

      console.log("User created successfully:", user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-Roboto">
      <h2 className="text-2xl mb-6 text-gray-700">Create New User</h2>
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
        className="mb-4 p-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mb-4 p-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mb-4 p-2 border rounded-lg"
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="mb-4 p-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="mb-4 p-2 border rounded-lg"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-6 p-2 border rounded-lg"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={createUser}
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUser;
