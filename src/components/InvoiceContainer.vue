<template>
  <div class="invoice-container"></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "InvoiceContainer",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.invoice-container {
  background-color: #fff;
  margin-top: 20px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-width: 1px;
  border-radius: 1.5rem;
}

@media (min-width: 1024px) {
  .invoice-container {
    padding: 2.5rem;
  }
}
</style>
