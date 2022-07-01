import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
	protected tableName = 'reservations';

	public async up () {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');
			table.integer('seat').notNullable().checkPositive();
			table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
			table.integer('flight_id').unsigned().references('id').inTable('flights').onDelete('CASCADE');
			table.timestamp('created_at', { useTz: true });
			table.timestamp('canceled_at', { useTz: true }).nullable();
		});
	}

	public async down () {
		this.schema.dropTable(this.tableName);
	}
}
