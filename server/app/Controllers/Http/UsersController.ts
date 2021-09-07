import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index ({}: HttpContextContract) {
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request }: HttpContextContract) {
  const body = request.body();
  const user = await User.create(body);
  return user;
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
