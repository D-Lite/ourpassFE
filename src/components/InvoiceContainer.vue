<template>
  <div class="invoice-container">
    <div
      class="company_info fit row inline wrap justify-between items-center content-center"
    >
      <div class="row inline wrap justify-center items-center">
        <div class="icon_info">
          <q-icon style="color: #fff" size="3rem" name="water_drop"></q-icon>
        </div>
        <div class="col-auto q-mx-lg">
          <h5 class="q-pa-none q-ma-none text-weight-bolder text-subtitle1">
            {{ invoice.name }}
          </h5>
          <address>
            <a
              class="text-common text-subtitle2"
              href="mailto:hello@dipainhouse.com"
              >{{ invoice.email }}</a
            >
          </address>
        </div>
      </div>
      <address
        class="addresss q-mt-lg text-common text-subtitle2 text-weight-medium"
      >
        {{ invoice.location.street }} <br />
        {{ invoice.location.cityWithPostCode }}<br />
        {{ invoice.location.country }}
      </address>
    </div>

    <InvoiceCard :invoice="invoice?.invoice" class="q-mt-xs"></InvoiceCard>
    <InvoicePretable></InvoicePretable>
    <InvoiceTable class="q-mt-lg"></InvoiceTable>
  </div>
</template>

<script>
import InvoiceCard from "src/components/Invoice/InvoiceCard.vue";
import InvoicePretable from "./Invoice/InvoicePretable.vue";
import InvoiceTable from "./Invoice/InvoiceTable.vue";

import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: { InvoiceCard, InvoicePretable, InvoiceTable },
  async setup() {
    const store = useStore();
    const getInvoices = () => store.dispatch("invoice/getInvoice");
    await getInvoices();
    const invoice = computed(() => {
      return store.getters["invoice/getInvoice"];
    });
    return {
      invoice,
    };
  },
};
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

.icon_info {
  background-color: #397cf9;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
}

@media (min-width: 1024px) {
  .invoice-container {
    padding: 1.5rem;
  }
}

address a {
  text-decoration: none;
}
@media (max-width: 1023px) {
  .company_info {
    min-width: 100%;
  }

  .invoice-container {
    width: 80vw;
  }

  .addresss {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 20px;
  }
}
@media (max-width: 450px) {
  .company_info {
    align-items: flex-start;
  }
}
</style>
