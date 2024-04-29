import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {SqlDataSource} from '../datasources';
import {Producto, ProductoRelations, Marca} from '../models';
import {MarcaRepository} from './marca.repository';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {

  public readonly tiene_marca: BelongsToAccessor<Marca, typeof Producto.prototype.id>;

  constructor(
    @inject('datasources.SQL') dataSource: SqlDataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>,
  ) {
    super(Producto, dataSource);
    this.tiene_marca = this.createBelongsToAccessorFor('tiene_marca', marcaRepositoryGetter,);
    this.registerInclusionResolver('tiene_marca', this.tiene_marca.inclusionResolver);
  }
}
