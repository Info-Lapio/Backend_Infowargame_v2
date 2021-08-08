import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { NoticeModule } from './notice/notice.module';
import { ProblemModule } from './problem/problem.module';

@Module({
  imports: [EventModule, NoticeModule, ProblemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
