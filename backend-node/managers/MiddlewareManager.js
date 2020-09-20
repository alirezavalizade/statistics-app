import { EventEmitter } from 'events';
import cors from 'cors';

export default class MiddlewareManager extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    global.app.use(cors());
  }
}
