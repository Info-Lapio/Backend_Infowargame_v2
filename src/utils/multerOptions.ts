import { BadRequestException } from "@nestjs/common";
import { mkdirSync } from "fs";
import { existsSync } from "fs";
import { diskStorage } from "multer";
import uuidRandom from "./uuidRandom";

export const multerOptions = {
    fileFilter: (request, file, callback) => {
        if(file.mimetype.match(/\/(zip|jpg|png|jpeg)$/)) {
            callback(null, true);
        } else {
            callback(new BadRequestException(), false);
        }
    },
    storage: diskStorage({
        destination: (request, file, callback) => {
            const uploadPath: string = 'public';

            if(!existsSync(uploadPath)) {
                mkdirSync(uploadPath);
            }

            callback(null, uploadPath);
        },
        filename: (request, file, callback) => {
            callback(null, uuidRandom(file));
        }
    })
}
