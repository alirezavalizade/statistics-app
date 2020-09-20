<template>
  <c-box>
    <c-box bg="white" border-radius="15px" padding="5" mb="16px">
      <chart />
    </c-box>
    <c-box d="flex" mb="16px">
      <c-grid w="100%" template-columns="repeat(3, 1fr)" gap="16px">
        <active-records />

        <c-box bg="white" border-radius="15px" padding="5" flex="1">
          <total-streamed-seconds />
        </c-box>
        <c-box bg="white" border-radius="15px" padding="5" flex="1">
          <most-popular />
        </c-box>
      </c-grid>
    </c-box>
    <c-box d="flex" bg="white" border-radius="15px" padding="5">
      <label-list />
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CGrid } from '@chakra-ui/vue';

import ActiveRecords from './ActiveRecords';
import Chart from './Chart';
import TotalStreamedSeconds from './TotalStreamedSeconds';
import MostPopular from './MostPopular';
import LabelList from './LabelList';

export default {
  components: {
    CBox,
    CGrid,
    ActiveRecords,
    Chart,
    TotalStreamedSeconds,
    MostPopular,
    LabelList
  }
};
</script>
