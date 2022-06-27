import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.put('/update/:id', 'UserController.update')
    Route.get('/account/:id', 'UserController.show')
    Route.delete('/delete/:id', 'UserController.delete')
  }).prefix('/v1/user')
}).prefix('/api')
  .middleware(['auth', 'user'])
