import sharp from 'sharp';

export const imageHandler = async (img: Express.Multer.File, targetPath: string): Promise<void> => {
    await sharp(img.buffer)
        .rotate()
        .toFile(targetPath);
    return;
};