import { Test, TestingModule } from '@nestjs/testing';
import { TextProcessorController } from './text-processor.controller';

describe('TextProcessorController', () => {
  let controller: TextProcessorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextProcessorController],
    }).compile();

    controller = module.get<TextProcessorController>(TextProcessorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
