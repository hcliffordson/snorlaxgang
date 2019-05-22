import { Router } from 'express';
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import shortid from 'shortid';
import config from '../../config';
import { imageHandler } from './imagehandler';

const router = Router();

const TARGET_PATH = config.IMAGE_PATH;
const storage = multer.memoryStorage();
const upload = multer({
    storage
});

const handleError = (err: any, res: any) => {
    console.error('ERROR', err);
    res
      .status(500)
      .contentType('text/plain')
      .end('Oops! Something went wrong!');
  };

// ensure the image folder exists

if (!fs.existsSync(TARGET_PATH)) {
    fs.mkdirSync(TARGET_PATH, {
        recursive: true
    });
}
// upload image
router.post('', upload.single('file'), async (req, res) => {
    const name = shortid.generate() + '.png';
    const targetPath = path.join(TARGET_PATH, name);
    try {
        await imageHandler(req.file, targetPath);
        res.status(200)
          .contentType('text/plain')
          .end(name);
    } catch (ex) {
        return handleError(ex, res);
    }
});
// to be able to get files
router.use(express.static(TARGET_PATH));

export default router;