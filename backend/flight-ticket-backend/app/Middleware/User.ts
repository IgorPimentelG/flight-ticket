import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class User {
	public async handle({ auth, request, response }: HttpContextContract, next: () => Promise<void>) {
		const id = request.param('id');
		const userId = auth.user!.id;

		if( userId !== id) {
			response.unauthorized({ message: 'Authorization denied!' });
		}

		await next();
	}
}
