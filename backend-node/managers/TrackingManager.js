import HashTable from '../helpers/Hashtable';
import { timeDiffSeconds } from '../helpers/date';

import events from '../mock/events';

import config from '../configs/app';

const {
  tracking: { keyId, timeout, eventsNumber }
} = config;

export default class TrackingManager extends HashTable {
  constructor() {
    super();

    // bind to use in none-arrow -fns
    this.handleSimulator = this.handleSimulator.bind(this);

    this.init();
  }

  init() {
    this.simulator();
  }

  simulator() {
    this.handleSimulator();
    this.interval = setInterval(this.handleSimulator, timeout);
  }

  handleSimulator() {
    const generatedEvents = events(eventsNumber);

    for (let i = 0; i < generatedEvents.length; i++) {
      const event = generatedEvents[i];
      this.set(event[keyId], event);
    }
  }

  beforeDestroy() {
    clearTimeout(this.interval);
  }

  /*
   * @Overrides
   */
  beforeSet(value) {
    const trackedEvent = this.get(value[keyId], value);
    const secondsStreamed = timeDiffSeconds(
      undefined,
      trackedEvent.stream_started_on
    );

    return {
      ...trackedEvent,
      seconds_streamed: secondsStreamed
    };
  }
}
