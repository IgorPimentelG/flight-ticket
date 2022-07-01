import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import AuthenticateValidator from 'App/Validators/AuthenticateValidator';

export default class AuthController {
	public async authenticate({ auth, request, response }: HttpContextContract) {
		try {
			const payload = await request.validate(AuthenticateValidator);
			const { email, password } = payload;
			const user = await User.findByOrFail('email', email);
			const token = await auth.use('api').attempt(email, password, {
				expiresIn: '30min'
			});

			return response.ok({ user, token });
		} catch {
			return response.unauthorized({ message: 'Invalid Credentails!'});
		}
	}
}
