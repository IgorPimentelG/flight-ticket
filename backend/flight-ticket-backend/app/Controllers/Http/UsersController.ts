/* eslint-disable @typescript-eslint/no-non-null-assertion */
import User from 'App/Models/User';
import Drive from '@ioc:Adonis/Core/Drive';
import Application from '@ioc:Adonis/Core/Application';
import NewUserValidator from 'App/Validators/NewUserValidator';
import UpdateUserValidator from 'App/Validators/UpdateUserValidator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UsersController {
	public async store({ request, response }: HttpContextContract) {
		try {
			const payload = await request.validate(NewUserValidator);
			const user = await User.create(payload);

			return response.created({ user });
		} catch {
			return response.badRequest({ message: 'Cannot create new user!' });
		}
	}

	public async show({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const user = await User.findByOrFail('id', id);

			return response.ok({ user });
		} catch {
			return response.notFound({ message: 'User not found!'});
		}
	}

	public async update({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const payload = await request.validate(UpdateUserValidator);
			const profileImage = request.file('profile_image', {
				size: '2mb',
				extnames: ['jpg', 'png']
			});

			if (!profileImage?.isValid) {
				return response.badRequest({ message: 'Porifle image invalids!' });
			}

			if (!payload.email && !payload.password && !profileImage) {
				return response.badRequest({ message: 'Fill in the data' });
			}

			const user = await User.findByOrFail('id', id);

			if (payload.email) user.email = payload.email;
			if (payload.password) user.password = payload.password;
			if (profileImage) {
				await profileImage.moveToDisk('');
				const fileName = profileImage.fileName!;
				user.image = fileName;
			}

			await user.save();
			return response.ok({ user });
		} catch {
			return response.abort({ message: 'Cannot update user!'});
		}
	}

	public async delete({ auth, request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const userIdAuthenticated = auth.user!.id;

			if (id !== userIdAuthenticated) {
				response.unauthorized({ message: 'Authorization denied!'});
			}

			const user = await User.findByOrFail('id', id);
			await user.delete();
			return response.ok({ user });
		} catch {
			return response.notFound({ message: 'User not found!'});
		}
	}

	public async downloadImage({ auth, request, response }: HttpContextContract) {
		try {
			const file = request.param('file');
			const userIdAuthenticated = auth.user!.id;
			const isExist = await Drive.exists(file);
			const user = await User.findByOrFail('image', file);

			if (user.id !== userIdAuthenticated) {
				return response.unauthorized({ message: 'Authorization denied!'});
			}

			if (isExist) {
				const url = await Drive.getUrl(file);
				response.status(200);
				return response.download(`tmp/${url}`);
			}

			return response.notFound({ message: 'Image not found! '});
		} catch {
			return response.notFound({ message: 'User not found!'});
		}
	}

}
