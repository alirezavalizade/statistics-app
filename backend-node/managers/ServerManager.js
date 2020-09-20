import { EventEmitter } from 'events';
import express from 'express';

import config from '../configs/app';

export default class ServerManager extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    global.app = express();

    this.runServer();
  }

  runServer() {
    global.app.listen(config.port, () => {
      this.emit('running', `server is running on ${config.port}`);
    });
  }
}
