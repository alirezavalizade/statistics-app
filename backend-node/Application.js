import { EventEmitter } from 'events';

import ExceptionHandler from './handlers/ExceptionHandler';
import ServerManager from './managers/ServerManager';
import MiddlewareManager from './managers/MiddlewareManager';
import ApiManager from './managers/ApiManager';

export default class Application extends EventEmitter {
  constructor() {
    super();

    this.init();
    this.initExpentionHandler();
  }

  init() {
    this.serverManager = new ServerManager();
    this.middlewareManager = new MiddlewareManager();
    this.apiManager = new ApiManager();

    this.serverManager.on('running', (...args) => {
      this.afterRun(...args);
    });
  }

  initExpentionHandler() {
    this.exceptionHandler = new ExceptionHandler();
    this.exceptionHandler.on('uncaughtException', () => {
      this.apiManager.trackingManager.beforeDestroy();
    });
  }

  // hooks
  afterRun(...args) {
    console.log(...args);
  }
}
