import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase"; // Firebase config
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Modal from "../../components/Modal";

interface EventData {
  title: string;
  location: string;
  date: string;
  description: string[];
  imageUrl: string;
}

const EventModalForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState<EventData>({
    title: "",
    location: "",
    date: "",
    description: [""],
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null); // Store the image file
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof EventData
  ) => {
    setEventData({ ...eventData, [field]: e.target.value });
  };

  // Handle description change for dynamic fields
  const handleDescriptionChange = (index: number, value: string) => {
    const updatedDescriptions = [...eventData.description];
    updatedDescriptions[index] = value;
    setEventData({ ...eventData, description: updatedDescriptions });
  };

  const addDescriptionField = () => {
    setEventData({ ...eventData, description: [...eventData.description, ""] });
  };

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]); // Store the selected file
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      // If an image is selected, upload it to Firebase Storage
      if (imageFile) {
        const imageRef = ref(storage, `events/${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Add event data to Firestore with the image URL
      await addDoc(collection(db, "events"), {
        ...eventData,
        imageUrl, // Use the uploaded image URL
      });

      // Reset form data
      setEventData({
        title: "",
        location: "",
        date: "",
        description: [""],
        imageUrl: "",
      });
      setImageFile(null); // Reset image file
      setError("");
      setShowModal(false); // Close modal on success
    } catch (error) {
      setError("Error uploading event data.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Add New Event
      </button>

      {/* Modal Component */}
      {showModal && (
        <Modal>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block">Event Title:</label>
              <input
                type="text"
                value={eventData.title}
                onChange={(e) => handleChange(e, "title")}
                className="border p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="block">Location:</label>
              <input
                type="text"
                value={eventData.location}
                onChange={(e) => handleChange(e, "location")}
                className="border p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="block">Date:</label>
              <input
                type="datetime-local"
                value={eventData.date}
                onChange={(e) => handleChange(e, "date")}
                className="border p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="block">Image:</label>
              <input
                type="file"
                onChange={handleImageChange} // Handle file selection
                className="border p-2 w-full"
                accept="image/*" // Accept only image files
                required
              />
            </div>

            <div>
              <label className="block">Description:</label>
              {eventData.description.map((desc, index) => (
                <textarea
                  key={index}
                  value={desc}
                  onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  className="border p-2 w-full mb-2"
                  required
                />
              ))}
              <button
                type="button"
                onClick={addDescriptionField}
                className="bg-gray-300 text-black px-3 py-1 rounded mt-2"
              >
                Add Another Description
              </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default EventModalForm;
