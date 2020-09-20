<template>
  <state-injector>
    <c-box
      slot-scope="{ statistics, loading }"
      d="flex"
      justify-content="space-between"
      flex-dir="column"
      h="100%"
      min-h="200px"
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
              Most popular track:
            </c-heading>
            <c-heading
              size="lg"
              mt="10px"
              text-transform="capitalize"
              v-if="getMostPopular(statistics)"
            >
              {{ getMostPopular(statistics).label }}
            </c-heading>
          </c-box>

          <c-box
            border-radius="50%"
            color="blue.wave"
            d="flex"
            justify-content="center"
            align-items="center"
          >
            <fire-icon width="50" height="50" fill="currentColor" />
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

import FireIcon from '@public/vectors/fire.svg';

export default {
  components: {
    StateInjector,
    CBox,
    CHeading,
    CIcon,
    CSpinner,
    FireIcon
  },
  methods: {
    getMostPopular(statistics) {
      return statistics.reduce((acc, item) => {
        if (acc.seconds_streamed < item.seconds_streamed) {
          acc = item;
        }

        return acc;
      }, statistics[0]);
    }
  }
};
</script>
