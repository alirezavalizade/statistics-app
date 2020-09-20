<template>
  <state-injector>
    <c-box
      slot-scope="{ statistics, loading }"
      padding="5"
      border-radius="10px"
      bg="blue.wave"
      box-shadow="5px 10px 35px -14px rgba(11,38,175,1)"
      class="fancy-bg"
    >
      <c-box
        d="flex"
        justify-content="space-between"
        color="white"
        flex-dir="column"
        min-h="200px"
      >
        <c-spinner
          v-if="loading"
          thickness="10px"
          speed="0.65s"
          color="white"
          size="xl"
        />
        <c-box v-else>
          <c-heading size="sm" text-transform="uppercase" letter-spacing="4px">
            Active Records:
          </c-heading>
          <c-heading size="lg" mt="10px">
            {{ statistics.length }}
          </c-heading>
        </c-box>
        <c-box>
          <c-heading size="xs">
            <a href="#"> View refrence <c-icon name="arrow-forward" /> </a>
          </c-heading>
        </c-box>
      </c-box>
    </c-box>
  </state-injector>
</template>

<script>
import { StateInjector } from '@state/AppState';
import { CBox, CHeading, CIcon, CSpinner } from '@chakra-ui/vue';

export default {
  components: {
    StateInjector,
    CBox,
    CHeading,
    CIcon,
    CSpinner
  }
};
</script>
<style scoped>
.fancy-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%230b26af' width='11' height='11'/%3E%3Crect fill='%230b26ae' x='10' width='11' height='11'/%3E%3Crect fill='%230b26ad' y='10' width='11' height='11'/%3E%3Crect fill='%230b25ac' x='20' width='11' height='11'/%3E%3Crect fill='%230a25ab' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%230a25aa' y='20' width='11' height='11'/%3E%3Crect fill='%230a25a9' x='30' width='11' height='11'/%3E%3Crect fill='%230a24a8' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%230a24a7' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%230a24a6' y='30' width='11' height='11'/%3E%3Crect fill='%230a24a5' x='40' width='11' height='11'/%3E%3Crect fill='%230a24a4' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%230a23a2' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%230a23a1' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%230923a0' y='40' width='11' height='11'/%3E%3Crect fill='%2309239f' x='50' width='11' height='11'/%3E%3Crect fill='%2309239e' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2309229d' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2309229c' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%2309229b' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%2309229a' y='50' width='11' height='11'/%3E%3Crect fill='%23092199' x='60' width='11' height='11'/%3E%3Crect fill='%23092198' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23092197' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23092196' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23092195' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23092094' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23092093' x='70' width='11' height='11'/%3E%3Crect fill='%23092092' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23092091' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23081f90' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23081f8f' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23081f8e' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23081f8d' x='80' width='11' height='11'/%3E%3Crect fill='%23081f8c' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23081e8b' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23081e8a' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23081e89' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23081e88' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23081d87' x='90' width='11' height='11'/%3E%3Crect fill='%23081d86' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23081d85' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23081d84' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23081d83' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23081c82' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23081c81' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23081c80' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23081c7f' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23081b7e' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23081b7d' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23081b7c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23081b7b' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23081b7a' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23081a79' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23081a78' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23081a77' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23081a76' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23081975' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23081974' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23081973' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
}
</style>
