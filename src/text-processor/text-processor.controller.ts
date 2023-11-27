import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller()
export class TextProcessorController {
  @Post('process-text')
  processText(@Body('text') text: string): string {
    if (!text) {
      throw new HttpException('No text provided', HttpStatus.BAD_REQUEST);
    }
    return this.simulateLangChain(text);
  }

  private simulateLangChain(text: string): string {
    switch (true) {
      case /status/.test(text):
        return 'Starship status: All systems nominal.';
      case /crew/.test(text):
        return 'Crew status: Healthy and active.';
      case /help/.test(text):
        return 'Available commands: status, crew, help';
      default:
        return 'Command not recognized.';
    }
  }
}
