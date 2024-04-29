import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Marca} from './marca.model';

@model()
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  Precio: number;

  @property({
    type: 'number',
    default: 0,
  })
  Existencia?: number;

  @property({
    type: 'number',
    required: true,
  })
  Calificacion: number;

  @property({
    type: 'number',
    default: 0,
  })
  Descuento?: number;

  @belongsTo(() => Marca, {name: 'tiene_marca'})
  id_marca: number;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
