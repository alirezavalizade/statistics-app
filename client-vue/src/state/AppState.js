// The idea behind of this approach is coming from this article that I wrote couple of months ago.
// https://medium.com/@alirezavalizade/react-context-in-vue-d40ee145974d
// These approach doesn't make sense for large scale applications but for small apps does (props hell)!
import { loadStatistics } from '@client/statistics';

export const StateProvider = {
  data() {
    return {
      statistics: [],
      loading: false
    };
  },

  created() {
    this.loading = true;
    this.poll().then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
    this.interval = setInterval(
      this.poll,
      Number(process.env.VUE_APP_POLL_TIMEOUT)
    );
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    async poll() {
      try {
        const { result } = await loadStatistics();
        this.statistics = result;
      } catch (e) {
        // ignore
      }
    },
    getAppState() {
      return {
        statistics: this.statistics,
        loading: this.loading
      };
    }
  },

  provide() {
    return {
      getAppState: this.getAppState
    };
  },

  render() {
    return this.$scopedSlots.default({});
  }
};

export const StateInjector = {
  inject: ['getAppState'],
  render() {
    return this.$scopedSlots.default(this.getAppState());
  }
};
