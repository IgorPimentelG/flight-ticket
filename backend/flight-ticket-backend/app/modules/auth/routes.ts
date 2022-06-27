import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('/sign-in', 'AuthController.authenticate')
    Route.post('/sign-up', 'AuthController.store')
  }).prefix('/v1')
}).prefix('/api')
