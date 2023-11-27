import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextProcessorController } from './text-processor/text-processor.controller';

@Module({
  imports: [],
  controllers: [AppController, TextProcessorController],
  providers: [AppService],
})
export class AppModule {}
