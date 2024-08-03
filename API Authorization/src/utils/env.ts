import dotenv from 'dotenv';
dotenv.config();


export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "472741184432438";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "QJ4Hm2lQxqEwTrStJYdd0xth8Yc";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "dvbwty9ly";
export const DATABASE_URL: string = "mongodb+srv://di2kashter:V75syoynSG1XfgdH@belajar-be-nodejs.yuu3smx.mongodb.net/?retryWrites=true&w=majority&appName=belajar-be-nodejs";



export const SECRET: string = process.env.SECRET || "secret";