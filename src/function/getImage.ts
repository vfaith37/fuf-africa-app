import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";

export const getImageUrl = async (
  imagePath: string
): Promise<string | null> => {
  const imageRef = ref(storage, imagePath);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null;
  }
};
