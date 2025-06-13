import { Injectable } from '@nestjs/common';
import { Dog } from './types/dog.type';
import { DogDto } from './types/dog.dto';
import { UpdateDogDto } from './types/update.dto';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Injectable()
export class DogsService {

// atributo dogs que es
// la coleccion de dogs
// # hace que el atributo sea privado
#dogs: Dog[];

constructor() {
  //por default dogs tenga un registro
  this.#dogs = [
    {
      id: 1,
      name: 'marshall',
      color: 'moteado',
    },
  ];
}

//metodo para devolver todos los registros
findAll(): Dog[] {
  return this.#dogs;
}

//metodo para devolver un registro por id
findOne(id: number): Dog {
    const dog = this.#dogs.find(dog => dog.id === id);
    if (!dog) throw new NotFoundException(`perro con id ${id} no fue localizado`);
    return dog;
  }

create(dog: DogDto) {
  // asignar un id al nuevo perro
  const newDog = {
    id: this.#dogs.length + 1, // asigna un nuevo ID
    ...dog,  // usa el operador spread para copiar las propiedades del DTO
  };

   this.#dogs.push(newDog);

   // devuelve el nuevo registro
  return newDog;
}

   //actualiza un registro
update(id: number, UpdateDogDto: UpdateDogDto): Dog {
        const index = this.#dogs.findIndex(dog => dog.id === id);
        this.#dogs[index] = { ...this.#dogs[index], ...UpdateDogDto };
        return this.#dogs[index];
    }

// elimina un registro
delete(id: number): void {
        this.#dogs = this.#dogs.filter(dog => dog.id !== id);
    }
}