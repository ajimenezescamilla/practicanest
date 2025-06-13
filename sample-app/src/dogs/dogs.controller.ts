import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './types/dog.type';
import { DogDto } from './types/dog.dto';
import { UpdateDogDto } from './types/update.dto';
import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('dogs') //dogs
export class DogsController {
//constructor
//con la inyeccion del servicio
constructor(private readonly dogsService: DogsService) {}

    //index  /dogs/
    @Get()
    index() {
        return this.dogsService.findAll();
    }

    //busca un registro por id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Dog {
    return this.dogsService.findOne(id);
  }

    // create
    @Post() // Post: /dogs/
    create(@Body() createDogDto: DogDto) {
        return this.dogsService.create(createDogDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateDogDto: UpdateDogDto) {
        return this.dogsService.update(+id, UpdateDogDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.dogsService.delete(+id);
    }
    }