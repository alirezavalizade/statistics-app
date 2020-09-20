<template>
  <state-injector>
    <c-box slot-scope="{ statistics, loading }" w="100%" min-h="400px">
      <c-spinner
        v-if="loading"
        thickness="10px"
        speed="0.65s"
        color="blue.wave"
        size="xl"
      />
      <c-box v-else>
        <c-box is-truncated mb="20px">
          <c-box
            d="flex"
            justify-content="space-between"
            text-transform="capitalize"
          >
            <c-heading size="lg" is-truncated>
              Labels
            </c-heading>
            <c-button
              border-radius="50%"
              variant-color="blue"
              width="30px"
              height="30px"
              min-w="auto"
              padding="0"
              pos="relative"
            >
              <c-box pos="absolute" color="#FFF">
                <more-icon width="15" height="15" fill="currentColor" />
              </c-box>
            </c-button>
          </c-box>
        </c-box>
        <c-box
          v-for="item in statistics"
          :key="item.label"
          d="flex"
          align-items="center"
          justify-content="space-between"
          ml="-10px"
          mr="-10px"
          class="repeater"
          p="10px"
          border-radius="10px"
          border-bottom-width="1px"
          border-bottom-color="gray.100"
        >
          <c-box>
            <c-box d="flex" align-items="center">
              <c-box>
                <c-box
                  color="#FFF"
                  border-radius="50%"
                  bg="blue.wave"
                  d="flex"
                  justify-content="center"
                  align-items="center"
                  padding="10px"
                >
                  <note-icon width="20" height="20" fill="currentColor" />
                </c-box>
              </c-box>
              <c-box ml="10px">
                <c-box
                  d="flex"
                  justify-content="space-between"
                  flex-dir="column"
                  text-transform="capitalize"
                >
                  <c-heading size="xs">{{ item.label }}</c-heading>
                  <c-text font-size="13px" color="gray.500" mt="5px">
                    {{ item.user_id }}
                  </c-text>
                </c-box>
              </c-box>
            </c-box>
          </c-box>
          <c-box>
            <c-heading size="xs" ml="8px">
              {{ item.seconds_streamed }}
            </c-heading>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </state-injector>
</template>

<script>
import { StateInjector } from '@state/AppState';
import { CBox, CHeading, CText, CSpinner, CButton } from '@chakra-ui/vue';

import NoteIcon from '@public/vectors/note.svg';
import MoreIcon from '@public/vectors/more.svg';

export default {
  components: {
    StateInjector,
    CBox,
    CHeading,
    CText,
    CButton,
    CSpinner,
    NoteIcon,
    MoreIcon
  }
};
</script>
<style lang="scss" scoped>
.repeater {
  &:hover {
    background-color: #f3f3f3;
  }
}
</style>
