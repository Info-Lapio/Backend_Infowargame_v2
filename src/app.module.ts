import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { NoticeModule } from './notice/notice.module';
import { ProblemModule } from './problem/problem.module';
import { AppController } from './app.controller';

@Module({
  imports: [EventModule, NoticeModule, ProblemModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
