import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
	Route.group(() => {
		Route.put('/update/:id', 'UsersController.update');
		Route.get('/account/:id', 'UsersController.show');
		Route.delete('/delete/:id', 'UsersController.delete');
		Route.get('/download-image/:file', 'UsersController.downloadImage');
	}).prefix('/v1/user');
}).prefix('/api')
	.middleware(['auth', 'user']);
