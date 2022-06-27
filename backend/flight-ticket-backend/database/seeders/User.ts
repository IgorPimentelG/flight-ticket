import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.updateOrCreateMany('email', [
      { email: 'user@test.com', password: 'topsecret' }
    ])
  }
}
