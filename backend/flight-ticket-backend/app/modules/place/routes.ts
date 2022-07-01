import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
	Route.group(() => {
		Route.post('/create', 'PlacesController.store');
		Route.put('/update/:id', 'PlacesController.update');
		Route.get('/list', 'PlacesController.show');
		Route.delete('/delete/:id', 'PlacesController.destroy');
		Route.get('/download-image/:file', 'PlacesController.downloadImage');
	}).prefix('/v1/place');
}).prefix('/api')
	.middleware(['auth']);
