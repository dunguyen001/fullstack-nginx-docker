export class BaseError extends Error {
  constructor(message) {
    super();

    this.name = 'BaseError';
    this.message = message;
  }
}
