import { UploadedFiles } from '@nestjs/common';
import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { multerOptions } from './utils/multerOptions';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseInterceptors(FilesInterceptor('file', null, multerOptions))
  @Post('/file')
  uploadFile(@UploadedFiles() file: Express.Multer.File) {
    return this.appService.uploadFile(file);
  }
}
