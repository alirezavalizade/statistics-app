<template>
  <state-provider>
    <layout>
      <statistics />
    </layout>
  </state-provider>
</template>

<script>
import { StateProvider } from '@state/AppState';

import Layout from '@components/layout/Layout';
import Statistics from '@components/statistics/Statistics';

export default {
  components: {
    StateProvider,
    Layout,
    Statistics
  }
};
</script>

<style lang="scss">
html {
  body {
    margin: 0;
    padding: 0;
    width: 100%;
  }
}
</style>
