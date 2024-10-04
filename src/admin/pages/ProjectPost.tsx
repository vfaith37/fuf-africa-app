import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase"; // Firebase config
import Modal from "../../components/Modal";

interface ProjectData {
  title: string;
  theme: string;
  paragraphs: string[];
  images: File[]; // For image files
  imageUrls: string[]; // For uploaded image URLs
  videoURL: string;
}

const ProjectUploadForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState<ProjectData>({
    title: "",
    theme: "",
    paragraphs: [""],
    images: [],
    imageUrls: [],
    videoURL: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  git remote set-url origin https://vfaith37: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@github.com/vfaith37/fuf-africa-app.git

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Omit<ProjectData, "images" | "imageUrls">
  ) => {
    setProjectData({ ...projectData, [field]: e.target.value });
  };

  // Handle dynamic paragraphs change
  const handleParagraphChange = (index: number, value: string) => {
    const updatedParagraphs = [...projectData.paragraphs];
    updatedParagraphs[index] = value;
    setProjectData({ ...projectData, paragraphs: updatedParagraphs });
  };

  // Handle image files change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files); // Convert file list to array
      setProjectData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...fileList], // Append selected images
      }));
    }
  };

  // Handle dynamic image URL field
  // const handleImageURLChange = (index: number, value: string) => {
  //   const updatedImages = [...projectData.imageUrls];
  //   updatedImages[index] = value;
  //   setProjectData({ ...projectData, imageUrls: updatedImages });
  // };

  // Add paragraph field
  const addParagraphField = () => {
    setProjectData({ ...projectData, paragraphs: [...projectData.paragraphs, ""] });
  };

  // Add image file field
  // const addImageField = () => {
  //   setProjectData({ ...projectData, imageUrls: [...projectData.imageUrls, ""] });
  // };

  // Upload images to Firebase Storage and get URLs
  const uploadImages = async () => {
    const imageUrls: string[] = [];
    for (const image of projectData.images) {
      const imageRef = ref(storage, `projects/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      imageUrls.push(imageUrl); // Save the URL
    }
    return imageUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload images and get their URLs
      const uploadedImageUrls = await uploadImages();

      // Add project data to Firestore
      await addDoc(collection(db, "projects"), {
        ...projectData,
        imageUrls: uploadedImageUrls, // Store URLs instead of File objects
      });

      // Reset form data
      setProjectData({
        title: "",
        theme: "",
        paragraphs: [""],
        images: [],
        imageUrls: [],
        videoURL: "",
      });

      setError("");
      setShowModal(false); // Close modal on success
    } catch (error) {
      setError("Error uploading project data.");
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
        Add New Project
      </button>

      {/* Modal Component */}
      {showModal && (
        <Modal>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block">Project Title:</label>
              <input
                type="text"
                value={projectData.title}
                onChange={(e) => handleChange(e, "title")}
                className="border p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="block">Project Theme:</label>
              <input
                type="text"
                value={projectData.theme}
                onChange={(e) => handleChange(e, "theme")}
                className="border p-2 w-full"
                required
              />
            </div>

            <div>
              <label className="block">Paragraphs:</label>
              {projectData.paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <textarea
                    value={paragraph}
                    onChange={(e) => handleParagraphChange(index, e.target.value)}
                    className="border p-2 w-full mb-2"
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addParagraphField}
                className="bg-gray-300 text-black px-3 py-1 rounded"
              >
                Add Another Paragraph
              </button>
            </div>

            <div>
              <label className="block">Images (Upload):</label>
              <input
                type="file"
                onChange={handleImageChange}
                multiple
                accept="image/*"
                className="border p-2 w-full mb-2"
              />
              {projectData.images.length > 0 && (
                <p className="text-green-500">{projectData.images.length} images selected</p>
              )}
            </div>

            <div>
              <label className="block">Video URL:</label>
              <input
                type="text"
                value={projectData.videoURL}
                onChange={(e) => handleChange(e, "videoURL")}
                className="border p-2 w-full"
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ProjectUploadForm;
