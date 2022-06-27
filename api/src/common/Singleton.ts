export class Singleton {
  static _instance;
  static getInstance<T>(): T {
    return this._instance || (this._instance = new this());
  }
}
