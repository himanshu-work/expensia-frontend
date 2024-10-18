import axios from "axios";

const BASE_URL = "https://expensia-be.onrender.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axiosInstance.post("/expensia/image", formData);

    // Handle the response as needed
    console.log("Upload success:", response.data);

    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Upload failed:", error);
    throw error;
  }
};

const downloadImage = async () => {
  try {
    const response = await axiosInstance.get("/expensia/image", {
      responseType: "arraybuffer", // Ensure response is treated as binary data
    });

    // Handle the response as needed
    const imageData = Buffer.from(response.data, "binary").toString("base64");
    console.log("Download success:", imageData);

    return imageData;
  } catch (error) {
    // Handle errors
    console.error("Download failed:", error);
    throw error;
  }
};

export { uploadImage, downloadImage };
