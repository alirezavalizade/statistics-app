<template>
  <c-box>
    <canvas ref="canvas" />
  </c-box>
</template>

<script>
import { CBox } from '@chakra-ui/vue';
import Chart from 'chart.js';

export default {
  components: {
    CBox
  },
  inject: ['getAppState'],
  data() {
    return {
      chart: null
    };
  },
  computed: {
    appState() {
      return this.getAppState();
    },
    statistics() {
      return this.appState.statistics;
    },
    sortedByLabels() {
      return this.statistics.sort((a, b) => {
        return (
          Number(a.label.match(/(\d+)/g)[0]) -
          Number(b.label.match(/(\d+)/g)[0])
        );
      });
    },
    labels() {
      return this.sortedByLabels.map(item => item.label);
    },
    data() {
      return this.sortedByLabels.map(item => item.seconds_streamed);
    },
    datasets() {
      return [
        {
          label: '# Seconds Streamed',
          data: this.data,
          backgroundColor: ['rgba(11, 38, 175, 0.4)'],
          borderColor: ['rgba(11, 38, 175, .2)'],
          borderWidth: 10
        }
      ];
    }
  },
  watch: {
    statistics(newValue, oldValue) {
      // render after the data loaded
      if (!oldValue.length && newValue.length) {
        this.renderChart();
      }
      // update when it's already mounted and the data(s) changed
      if (oldValue.length && newValue.length && this.chart) {
        this.chart.data.labels = this.labels;
        this.chart.data.datasets = this.datasets;
        // disable animate
        this.chart.update(0);
      }
    }
  },
  methods: {
    renderChart() {
      this.chart = new Chart(this.$refs.canvas, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  }
};
</script>
