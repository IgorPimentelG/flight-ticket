import { DateTime } from 'luxon';
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Place from './Place';

export default class Flight extends BaseModel {
  @column({ isPrimary: true })
	public id: number;

  @column()
  public code: string;

  @column()
  public price: number;

  @column()
  public totalAvailable: number;

  @column()
  public originId: number;

  @column()
  public destinyId: number;

  @hasOne(() => Place, {
  	foreignKey: 'originId'
  })
  public origin: HasOne<typeof Place>;

  @hasOne(() => Place, {
  	foreignKey: 'destinyId'
  })
  public destiny: HasOne<typeof Place>;

  @column.dateTime()
  public departureAt: DateTime;

  @column.dateTime()
  public canceledAt: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
