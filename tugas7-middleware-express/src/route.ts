import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";

import {handleUpload} from "./utils/cloudinary";

const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
    if(!req.file){
        return res.status(400).send('No file uploaded.');
    }
    try {
        console.log(`${req.file}`);
        const result = await handleUpload(req.file.buffer, req.file.originalname);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error});
      }
});
router.post("/upload/multiple", multiple, async (req, res, next) => {
    if (!req.files || !(req.files instanceof Array)) {
        return res.status(400).send('No files uploaded.');
      }
      try {
        const uploadPromises = (req.files as Express.Multer.File[]).map(file =>
          handleUpload(file.buffer, file.originalname)
        );
    
        const results = await Promise.all(uploadPromises);
        res.status(200).json(results);
      } catch (error) {
        res.status(500).json({ error});
      }
});

export default router;
