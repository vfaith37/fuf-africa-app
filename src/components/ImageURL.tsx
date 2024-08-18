import React, { useEffect, useState } from "react";
import { getImageUrl } from "../function/getImage";
// import { getImageUrl } from "./firebase";

interface ImageComponentProps {
  imagePath: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // console.log(12);
    const fetchImage = async () => {
    //   console.log(123);
      const url = await getImageUrl(imagePath);
      setImageUrl(url);
    };

    fetchImage();
  }, [imagePath]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Firebase stored" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ImageComponent;
