import { MessagingProtocol } from '../classes/protocols/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Menssagem enviada:', msg);
  }
}
