import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './types/cat.type';
import { CatDto } from './types/cat.dto';
import { UpdateCatDto } from './types/update.dto';
import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';

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

    //busca un registro por id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Cat {
    return this.catsService.findOne(id);
  }

    // create
    @Post() // Post: /cats/
    create(@Body() createcatDto: CatDto) {
        return this.catsService.create(createcatDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateCatDto: UpdateCatDto) {
        return this.catsService.update(+id, UpdateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.catsService.delete(+id);
    }
    }