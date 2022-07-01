import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Place from 'App/Models/Place';
import PlaceValidator from 'App/Validators/PlaceValidator';

export default class PlacesController {
	public async store({ request, response }: HttpContextContract) {
		try {
			const payload = await request.validate(PlaceValidator);
			const image = request.file('image', {
				size: '5mb',
				extnames: ['jpg', 'png']
			});

			if (!image?.isValid) {
				return response.badRequest({ message: 'Image invalid!' });
			}

			await image.moveToDisk('places/');
			const fileName = image.fileName;

			const place = await Place.create({ ...payload, image: fileName });
			return response.created({ place });
		} catch(error) {
			console.log(error);
			return response.badRequest({ message: 'Cannot possible register new the place!'});
		}
	}

	public async show({ response }: HttpContextContract) {
		const places = await Place.all();

		if (places.length === 0) {
			return response.noContent();
		}

		return response.ok({ places });
	}

	public async update({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const payload = await request.validate(PlaceValidator);
			const place = await Place.findByOrFail('id', id);

			if (!payload.city && !payload.country && !payload.rate) {
				return response.badRequest({ message: 'Nothing to update!' });
			}

			if (payload.city) place.city = payload.city;
			if (payload.country) place.country = payload.country;
			if (payload.rate) place.rate = payload.rate;

			await place.save();
			return response.ok({ place });
		} catch {
			return response.badRequest({ message: 'Cannot possible update the place' });
		}
	}

	public async destroy({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const place = await Place.findByOrFail('id', id);
			await place.delete();

			return response.ok({ place });
		} catch {
			return response.notFound({ message: 'Place not found! '});
		}
	}
}
