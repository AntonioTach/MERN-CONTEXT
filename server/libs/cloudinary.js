import cloudinary from "cloudinary";


cloudinary.v2.config({
  secure: true
});

export const uploadImage = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.v2.uploader.destroy(id);
};
