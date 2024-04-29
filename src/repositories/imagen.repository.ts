import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SqlDataSource} from '../datasources';
import {Imagen, ImagenRelations} from '../models';

export class ImagenRepository extends DefaultCrudRepository<
  Imagen,
  typeof Imagen.prototype.id,
  ImagenRelations
> {
  constructor(
    @inject('datasources.SQL') dataSource: SqlDataSource,
  ) {
    super(Imagen, dataSource);
  }
}
