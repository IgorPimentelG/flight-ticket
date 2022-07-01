import { DateTime } from 'luxon';
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import User from './User';
import Flight from './Flight';

export default class Reservation extends BaseModel {
  @column({ isPrimary: true })
	public id: number;

  @column()
  public seat: number;

  @column()
  public userId: number;

  @column()
  public flightId: number;

  @hasOne(() => User, {
  	foreignKey: 'userId'
  })
  public user: HasOne<typeof User>;

  @hasOne(() => Flight, {
  	foreignKey: 'flightId'
  })
  public flight: HasOne<typeof Flight>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime()
  public canceledAt: DateTime;
}
