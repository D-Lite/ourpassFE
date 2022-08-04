<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand app-font">
    <q-header
      class="bg-white text-amber border-bottom-dark q-px-xl"
      style="padding-left: 150px"
    >
      <q-toolbar>
        <q-toolbar-title
          bolder
          class=""
          style="max-width: 200px; font-weight: 800; color: #454680"
        >
          Paypay.
        </q-toolbar-title>
        <q-tabs align="left" class="">
          <q-list class="row" align="left">
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <suspense timeout="0">
          <template #default>
            <component :is="Component"></component>
          </template>
          <template #fallback>
            <div class="loader">
              <q-circular-progress
                indeterminate
                size="5rem"
                color="primary"
                class="q-ma-md"
              />
            </div>
          </template>
        </suspense>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    caption: "quasar.dev",
    icon: "dashboard",
    isSelect: false,
  },
  {
    title: "Invoices",
    icon: "receipt",
    isSelect: true,
  },
  {
    title: "Wallet",
    icon: "account_balance_wallet",
    isSelect: false,
  },
  {
    title: "Activities",
    icon: "eva-activity",
    isSelect: false,
  },
  {
    title: "Help",
    icon: "call",
    isSelect: false,
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    return {
      essentialLinks: linksList,
    };
  },
});
</script>

<style scoped>
.loader {
  min-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .q-toolbar {
    padding-left: 2rem;
  }
}

@media (max-width: 1023px) {
  .q-toolbar {
    padding-left: 0.5rem;
  }
}

.sth {
  margin: 0 auto;
}
</style>
