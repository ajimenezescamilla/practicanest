import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { CatDto } from './types/cat.dto';

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

//implementar el resto de los metodos
}