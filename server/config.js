import dotenv from "dotenv";

dotenv.config();

//MongoDB
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testdb"

//Port
export const PORT = process.env.PORT || 4000

// //Cloudinary
// export const cloud_name = process.env.CLOUDINARY_NAME;
// export const api_key = process.env.CLOUDINARY_NAME_API_KEY;
// export const api_secret = process.env.CLOUDINARY_API_SECRET;
