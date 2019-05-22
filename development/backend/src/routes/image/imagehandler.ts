import sharp from 'sharp';
import fs from 'fs';

export const imageHandler = async (img: Express.Multer.File, targetPath: string): Promise<void> => {
    const buffer = await sharp(img.buffer)
        .rotate()
        .toBuffer();
    fs.writeFileSync(targetPath, buffer);
    return;
};