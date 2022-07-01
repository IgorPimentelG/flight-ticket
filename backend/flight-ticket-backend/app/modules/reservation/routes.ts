import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
	Route.group(() => {
		Route.post('/buy', 'ReservationsController.store');
		Route.put('/update/:id', 'ReservationsController.update');
		Route.get('/list', 'ReservationsController.show');
		Route.delete('/delete/:id', 'ReservationsController.destroy');
	}).prefix('/v1/reservation');
}).prefix('/api')
	.middleware(['auth']);
