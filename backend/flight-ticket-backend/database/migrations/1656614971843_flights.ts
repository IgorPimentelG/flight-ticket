import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
	protected tableName = 'flights';

	public async up () {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');
			table.string('code').notNullable().unique();
			table.integer('origin_id').unsigned().references('places.id').notNullable().onDelete('CASCADE');
			table.integer('destiny_id').unsigned().references('places.id').notNullable().onDelete('CASCADE');
			table.float('price').notNullable().checkPositive();
			table.integer('total_available').notNullable().checkPositive();
			table.timestamp('departure_at', { useTz: true }).notNullable();
			table.timestamp('created_at', { useTz: true });
			table.timestamp('updated_at', { useTz: true });
		});
	}

	public async down () {
		this.schema.dropTable(this.tableName);
	}
}
