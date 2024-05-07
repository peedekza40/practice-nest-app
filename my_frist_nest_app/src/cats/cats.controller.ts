import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    getCats(): string {
        return 'Meow! Here are your cute cats.';
    }
}
