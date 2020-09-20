<template>
  <c-box p="20px" bg="gray.wave2" d="flex" h="100%" flex-dir="column">
    <slot />
  </c-box>
</template>

<script>
import { CBox } from '@chakra-ui/vue';

export default {
  components: {
    CBox
  }
};
</script>
