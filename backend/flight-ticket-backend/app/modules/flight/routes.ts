import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
	Route.group(() => {
		Route.post('/new', 'FlightsController.store');
		Route.put('/update/:id', 'FlightsController.update');
		Route.get('/list', 'FlightsController.show');
		Route.get('/search/:id', 'FlightsController.search');
		Route.delete('/delete/:id', 'FlightsController.destroy');
	}).prefix('/v1/flight');
}).prefix('/api')
	.middleware(['auth']);
