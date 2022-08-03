<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <span class="link">
      <a>Invoices</a>
    </span>
    <span class="seperator">/</span>
    <span class="current-link-active">edit invoice (INV-2022-010)</span>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BreadCrumb",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.breadcrumb {
  display: flex;
}

.link a {
  text-decoration: none;
  font-weight: bold;
  color: #362ea1;
}

.current-link-active {
  color: #191a1c;
}

.seperator {
  margin-left: 5px;
  margin-right: 5px;
  color: #191a1c;
}
</style>
