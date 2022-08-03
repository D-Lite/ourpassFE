<template>
  <q-page class="flex q-px-xl q-py-xl column">
    <div class="main-section">
      <BreadCrumb></BreadCrumb>
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
.main-section {
  padding: 1rem 1.25rem;
}
@media (min-width: 1024px) {
  .main-section {
    padding: 2rem 1rem;
  }
}
</style>
