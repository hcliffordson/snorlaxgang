import { Router } from 'express';
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import shortid from 'shortid';
import config from '../config';

const router = Router();

const TMP_PATH = '../../tmp';
const TARGET_PATH = config.IMAGE_PATH;
const upload = multer({
    dest: TMP_PATH
});

const handleError = (err: any, res: any) => {
    console.log(err);
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
router.post('', upload.single('file'), (req, res) => {
    const tempPath = req.file.path;
    const name = shortid.generate() + '.png';
    const targetPath = path.join(TARGET_PATH, name);

    fs.copyFile(tempPath, targetPath, err => {
        if (err) return handleError(err, res);
        res.status(200)
          .contentType('text/plain')
          .end(name);
    });
});
// to be able to get files
router.use(express.static(TARGET_PATH));

export default router;