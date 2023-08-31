export class BadRequestException {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}
