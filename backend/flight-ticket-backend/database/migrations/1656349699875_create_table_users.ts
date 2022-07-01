import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
	protected tableName = 'users';

	public async up () {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');
			table.string('name').notNullable();
			table.string('email').unique().notNullable();
			table.string('password').notNullable();
			table.string('image').nullable();
			table.timestamp('created_at', { useTz: true });
			table.timestamp('updated_at', { useTz: true });
		});
	}

	public async down () {
		this.schema.dropTable(this.tableName);
	}
}
