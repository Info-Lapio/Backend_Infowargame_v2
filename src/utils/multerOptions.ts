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

export const createImageURL = (file): string => {
    const serverAddress: string = "http://122.34.166.47:5500"
    
    // 파일이 저장되는 경로: 서버주소/public 폴더
    // 위의 조건에 따라 파일의 경로를 생성해줍니다.
    return `${serverAddress}/public/${file.filename}`;
}