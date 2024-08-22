// storageUtils.ts
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";

/**
 * Retrieves the download URL for an image stored in Firebase Storage.
 * @param imagePath - The path to the image in Firebase Storage.
 * @returns A promise that resolves to the image URL, or null if there's an error.
 */
export const fetchImageUrl = async (imagePath: string): Promise<string | null> => {
    const fullPath = `gs://backend-14d9e.appspot.com/${imagePath}`;
    try {
    const imageRef = ref(storage, fullPath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null;
  }
};
