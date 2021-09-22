 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RegistersController {
    public async index ({ request }: HttpContextContract) {
        const validate = await schema.create({
          email: schema.string({},[
            rules.email()
          ]),
          password: schema.string({},[
            rules.confirmed()
          ]),
        });
        const data = await request.validate({ schema: validate })
        return data;
          }
}
