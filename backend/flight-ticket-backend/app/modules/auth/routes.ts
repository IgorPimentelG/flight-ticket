import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('/sign-in', 'AuthController.authenticate')
    Route.get('/sign-in/google', 'AuthController.authenticateWithGoogle')
    Route.get('/sign-in/google/callback', 'AuthController.authenticateWithGoogleCallback')
    Route.get('/sign-in/twitter', 'AuthController.authenticateWithTwitter')
    Route.get('/sign-in/twitter/callback', 'AuthController.authenticateWithTwitterCallback')
    Route.post('/sign-up', 'AuthController.store')
  }).prefix('/v1')
}).prefix('/api')
