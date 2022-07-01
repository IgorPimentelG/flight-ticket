import Flight from 'App/Models/Flight';
import Reservation from 'App/Models/Reservation';
import ReservationValidator from 'App/Validators/ReservationValidator';
import { DateTime } from 'luxon';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ReservationsController {
	public async store({ request, response }: HttpContextContract) {
		try {
			const payload = await request.validate(ReservationValidator);
			const flight = await Flight.findByOrFail('id', payload.flight_id);

			if (payload.seat > flight.totalAvailable) {
				return response.badRequest({ message: 'Seat does not exist! '});
			}

			const reservation = await Reservation.create(payload);

			return response.ok({ reservation });
		} catch {
			return response.badRequest({ message: 'Cannot possible buy the ticket' });
		}
	}

	public async show({ response }: HttpContextContract) {
		const tickets = await Reservation.all();

		if (tickets) {
			return response.ok({ tickets });
		}

		return response.noContent();
	}

	public async update({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const reservartion = await Reservation.findByOrFail('id', id);

			reservartion.canceledAt = DateTime.now();
			reservartion.save();

			return response.ok({ reservartion });
		} catch {
			response.notFound({ message: 'Ticket not found! '});
		}
	}

	public async delete({ request, response }: HttpContextContract) {
		try {
			const id = request.param('id');
			const reservation = await Reservation.findByOrFail('id', id);
			await reservation.delete();
			return response.ok({ reservation });
		} catch {
			return response.notFound({ message: 'Reservation not found! '});
		}
	}
}
