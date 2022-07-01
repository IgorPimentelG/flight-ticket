import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Flight from 'App/Models/Flight';
import FlightValidator from 'App/Validators/FlightValidator';
import UpdateFlightValidator from 'App/Validators/UpdateFlightValidator';
import { DateTime } from 'luxon';

export default class FlightsController {
	public async store({ request, response }: HttpContextContract) {
		try {
			const payload = await request.validate(FlightValidator);
			const flight = await Flight.create(payload);
			return response.ok({ flight });
		} catch(error) {
			return response.badRequest({ message: 'Cannot possible register new flight!' });
		}
	}

	/**
   * List of flights on which departure is earlier
   * than the current date.
   */
	public async show({ response }: HttpContextContract) {
		const flights = await Flight.query()
			.select()
			.where('departure_at', '>=',  DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss'));

		if (flights) {
			return response.ok({ flights });
		}

		return response.notFound({ message: 'No flights available!' });
	}

	public async search({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const flight = await Flight.findByOrFail('id', id);
			return response.ok({ flight });
		} catch {
			return response.notFound({ message: 'Flight not found!' });
		}
	}

	public async update({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const payload = await request.validate(UpdateFlightValidator);
			const flight = await Flight.findByOrFail('id', id);

			if (!payload.price && !payload.totalAvailable && !payload.departureAt && !payload.canceledAt) {
				return response.badRequest({ message: 'Nothing to update!' });
			}

			if (payload.price) flight.price = payload.price;
			if (payload.totalAvailable) flight.totalAvailable = payload.totalAvailable;
			if (payload.departureAt) flight.departureAt = payload.departureAt;
			if (payload.canceledAt) flight.canceledAt = payload.canceledAt;

			await flight.save();
			return response.ok({ flight });
		} catch {
			return response.notFound({ message: 'Cannot possible update flight! '});
		}
	}

	public async destroy({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const flight = await Flight.findByOrFail('id', id);
			await flight.delete();
			return response.ok({ flight });
		} catch {
			return response.notFound({ message: 'Flight not found!' });
		}
	}
}
