import cloudinary from "cloudinary";
import { cloud_name as cloudName, api_key as apiKey, api_secret as apiSecret} from "../config.js";

cloudinary.v2.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export const uploadImage = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.v2.uploader.destroy(id);
};
