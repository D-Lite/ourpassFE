<template>
  <div
    class="cardDisplay fit row inline wrap justify-between items-center content-center rounded bg-custom q-px-xl q-py-md text-white"
  >
    <div>
      <h6 class="q-ma-none text-subtitle2 q-mb-md">Invoice Number</h6>

      <p>{{ invoice?.invoiceNumber }}</p>

      <dl class="custom-fit row items-center">
        <dt class="q-mr-xs text-common">Issued Date:</dt>
        <dd>
          <time datetime="2022-01-11"> {{ invoice?.dateIssued }} </time>
        </dd>
      </dl>
      <dl class="custom-fit row items-center">
        <dt class="q-mr-xs text-common">Due Date:</dt>
        <dd>
          <time datetime="2022-01-18"> {{ invoice?.dueDate }} </time>
        </dd>
      </dl>
    </div>
    <div class="column q-mt-lg q-mt-sm-none items-end cardInfo">
      <h6 class="q-ma-none text-subtitle2 q-mb-md">Billed to</h6>

      <p>{{ invoice?.billedTo }}</p>

      <div class="custom-fit row items-center">
        <p class="q-mr-xs">{{ invoice?.companyName }}</p>
      </div>
      <div class="custom-fit row items-center">
        <p class="q-mr-xs">{{ invoice?.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    invoice: {
      type: Object,
    },
  },
};
</script>

<style scoped>
@media (max-width: 450px) {
  .InvoiceCard {
    align-items: flex-start;
  }
  .cardInfo {
    display: flex;
    align-items: flex-start;
  }
}

.cardDisplay {
}
#magnifying-glass {
  font-size: 10em;
  display: inline-block;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid red;
  position: relative;
  border-radius: 0.35em;
}
#magnifying-glass:before {
  content: "";
  display: inline-block;
  position: absolute;
  right: -0.25em;
  bottom: -0.1em;
  border-width: 0;
  background: red;
  width: 0.35em;
  height: 0.08em;
  transform: rotate(45deg);
}
</style>
