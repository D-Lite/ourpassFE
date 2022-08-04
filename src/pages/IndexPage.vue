<template>
  <q-page class="flex q-px-xl q-py-xl column">
    <div class="main-section q-pa-lg">
      <BreadCrumb class="q-mb-sm"></BreadCrumb>
      <InvoiceContainer></InvoiceContainer>
    </div>
  </q-page>
</template>

<script>
import BreadCrumb from "src/components/BreadCrumb.vue";

import { defineComponent } from "vue";
import InvoiceContainer from "src/components/InvoiceContainer.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    BreadCrumb,
    InvoiceContainer,
  },
});
</script>

<style scoped>
@media (min-width: 1024px) {
  .main-section {
    max-width: 90%;
    margin-left: auto;
    margin-right: 12rem;
  }
}
@media (min-width: 2000px) {
  .main-section {
    max-width: 60%;
    margin: 0 auto;
  }
}

@media (max-width: 1024px) {
  .main-section {
    padding: 0;
    margin: 0;
  }
}
</style>
