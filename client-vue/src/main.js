import Vue from 'vue';
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue';

import extendTheme from '@theme';

import App from './App.vue';

Vue.use(Chakra, {
  extendTheme
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(CThemeProvider, [h(App), h(CReset)])
}).$mount();
