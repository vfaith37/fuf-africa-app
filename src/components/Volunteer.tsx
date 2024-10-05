import React, { useEffect, useState } from "react";
import { fetchImageUrl } from "../utils/storageUtils";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const Volunteer: React.FC = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");
  const [loadingImage, setLoadingImage] = useState<boolean>(true); // Loading state for the image
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchImageUrl("IMG_6742.jpg");
      if (url) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setBackgroundImageUrl(url);
          setLoadingImage(false); // Only hide the skeleton when the image is fully loaded
        };
      }
    };

    loadImage();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { firstName, lastName, email, phoneNumber } = formData;
    if (!firstName || !lastName || !email || !phoneNumber) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "volunteers"), {
        firstName,
        lastName,
        email,
        phoneNumber,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setLoading(false);
      setShowModal(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center text-white px-4 md:px-16 h-96 mb-16 my-20 md:my-24">
      {/* Show skeleton while image is loading */}
      <div
        className={`flex flex-col justify-center items-center text-white w-full rounded-lg h-96 px-6 ${
          loadingImage ? "bg-gray-200 animate-pulse" : "bg-cover"
        }`}
        style={{
          backgroundImage: !loadingImage ? `url(${backgroundImageUrl})` : "none",
        }}
      >
        {loadingImage && (
          <div className="h-full w-full bg-gray-300 rounded-lg animate-pulse"></div>
        )}

        {!loadingImage && (
          <>
            <p className="font-bold text-4xl text-center mb-4 w-auto">
              You can contribute to provide a place for children with special needs!
            </p>
            <div className="flex text-black gap-6">
              <button
                className="bg-[#F2C94C] px-4 py-2 rounded-sm font-medium"
                onClick={() => setShowModal(true)}
              >
                Join as a volunteer
              </button>
              <button
                className="bg-white px-4 py-2 rounded-sm font-medium"
                onClick={() => navigate("/donate")}
              >
                Donate
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal for volunteer form */}
      {showModal && (
        <Modal>
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Join as a Volunteer</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-[#F2C94C] text-white px-4 py-2 rounded font-medium"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Volunteer;
