import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './types/cat.type';
import { CatDto } from './types/cat.dto';

@Controller('cats') //cats
export class CatsController {
//constructor
//con la inyeccion del servicio
constructor(private readonly catsService: CatsService) {}

    //index  /cats/
    @Get()
    index() {
        return this.catsService.findAll();
    }

    // create
    @Post() // Post: /cats/
    create(@Body() createcatDto: CatDto) {
        return this.catsService.create(createcatDto);
    }
}
