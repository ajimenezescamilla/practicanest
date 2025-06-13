import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { CatDto } from './types/cat.dto';
import { UpdateCatDto } from './types/update.dto';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Injectable()
export class CatsService {

// atributo cats que es
// la coleccion de cats
// # hace que el atributo sea privado
#cats: Cat[];

constructor() {
  //por default cats tenga un registro
  this.#cats = [
    {
      id: 1,
      name: 'Garfield',
      color: 'naranja',
    },
  ];
}

//metodo para devolver todos los registros
findAll(): Cat[] {
  return this.#cats;
}

//metodo para devolver un registro por id
findOne(id: number): Cat {
    const cat = this.#cats.find(cat => cat.id === id);
    if (!cat) throw new NotFoundException(`gato con id ${id} no fue localizado`);
    return cat;
  }

create(cat: CatDto) {
  // asignar un id al nuevo gato
  const newCat = {
    id: this.#cats.length + 1, // asigna un nuevo ID
    ...cat,  // usa el operador spread para copiar las propiedades del DTO}
   };

   this.#cats.push(newCat); 
   
   // devuelve el nuevo registro
  return newCat;
}

   //actualiza un registro
update(id: number, UpdateCatDto: UpdateCatDto): Cat {
        const index = this.#cats.findIndex(cat => cat.id === id);
        this.#cats[index] = { ...this.#cats[index], ...UpdateCatDto };
        return this.#cats[index];
    }

// elimina un registro
delete(id: number): void {
        this.#cats = this.#cats.filter(cat => cat.id !== id);
    }
}