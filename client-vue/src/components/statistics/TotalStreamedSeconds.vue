<template>
  <state-injector>
    <c-box
      slot-scope="{ statistics, loading }"
      d="flex"
      justify-content="space-between"
      flex-dir="column"
      h="100%"
    >
      <c-spinner
        v-if="loading"
        thickness="10px"
        speed="0.65s"
        color="blue.wave"
        size="xl"
      />
      <c-box v-else>
        <c-box d="flex" justify-content="space-between" align-items="center">
          <c-box>
            <c-heading size="sm" is-truncated>
              Total seconds streamed:
            </c-heading>
            <c-heading size="lg" mt="10px">
              {{ getTotalSecondsStreamd(statistics) }}
            </c-heading>
          </c-box>

          <c-box
            color="#FFF"
            border-radius="50%"
            bg="blue.wave"
            d="flex"
            justify-content="center"
            align-items="center"
          >
            <clock-icon width="50" height="50" fill="currentColor" />
          </c-box>
        </c-box>
      </c-box>
      <c-box>
        <c-heading size="xs">
          <a href="#"> View refrence <c-icon name="arrow-forward" /> </a>
        </c-heading>
      </c-box>
    </c-box>
  </state-injector>
</template>

<script>
import { StateInjector } from '@state/AppState';
import { CBox, CHeading, CIcon, CSpinner } from '@chakra-ui/vue';

import ClockIcon from '@public/vectors/clock.svg';

export default {
  components: {
    StateInjector,
    CBox,
    CHeading,
    CIcon,
    CSpinner,
    ClockIcon
  },
  methods: {
    getTotalSecondsStreamd(statistics) {
      return statistics
        .reduce((acc, { seconds_streamed: second }) => {
          acc = acc + second;
          return acc;
        }, 0)
        .toFixed(0);
    }
  }
};
</script>
