
import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { POINT_ONE, Usuario } from './model'

@NearBindgen({})
class GuestBook {
  messages: Vector<Usuario> = new Vector<Usuario>("v-uid");

  @call({ payableFunction: true })
  // Public - Adds a new message.
  add_message({ text }: { text: string }) {
    // If the user attaches more than 0.1N the message is premium
    const nombres = near.attachedDeposit() >= BigInt(POINT_ONE);
    const apellidos = near.predecessorAccountId();
    const direccion = near.predecessorAccountId();
    const telefono = near.predecessorAccountId();

    const message: Usuario = { nombres, apellidos, direccion,telefono  };
    this.messages.push(message);
  }

  @view({})
  // Returns an array of messages.
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): Usuario[] {
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_messages(): number { return this.messages.length }


  @view({})
  hola(): string {return "hola"}
}
