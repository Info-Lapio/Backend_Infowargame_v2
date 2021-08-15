import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger();
  getHello(): string {
    this.logger.log("[Log] Testing Server...");
    return 'Hello World!';
  }

  uploadFile(file: Express.Multer.File): string {
    return file.filename;
  }
}
