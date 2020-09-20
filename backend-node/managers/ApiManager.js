import { EventEmitter } from 'events';

import TrackingManager from './TrackingManager';

import { timeDiffSeconds } from '../helpers/date';

export default class ApiManager extends EventEmitter {
  constructor() {
    super();

    this.init();
  }

  init() {
    this.trackingManager = new TrackingManager();

    this.initApi();
  }

  initApi() {
    global.app.get('/api/statistics', (req, res) => {
      const { from } = req.query;

      if (timeDiffSeconds(from) > 0) {
        return res.status(400).json({ msg: 'Not found' });
      }
      return res.json({ result: this.trackingManager.getAll() });
    });
  }
}
