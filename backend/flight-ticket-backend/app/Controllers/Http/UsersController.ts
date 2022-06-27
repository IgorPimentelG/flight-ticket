import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator';

export default class UsersController {
  public async show({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const user = await User.findByOrFail('id', id);

      return response.ok({ user })
    } catch {
      return response.notFound({ message: 'User not found!'})
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const payload = await request.validate(UpdateUserValidator)

      if (!payload.email && !payload.password) {
        return response.badRequest({ message: 'Fill in the data' })
      }

      const user = await User.findByOrFail('id', id)

      if (payload.email) user.email = payload.email
      if (payload.password) user.password = payload.password

      await user.save()
      return response.ok({ user })
    } catch {
      return response.abort({ message: 'Cannot update user!'})
    }
  }

  public async delete({ auth, request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const userIdAuthenticated = auth.user!.id

      if (id !== userIdAuthenticated) {
        response.unauthorized({ message: 'Authorization denied!'})
      }

      const user = await User.findByOrFail('id', id);
      await user.delete()
      return response.ok({ user })
    } catch {
      return response.notFound({ message: 'User not found!'})
    }
  }
}
