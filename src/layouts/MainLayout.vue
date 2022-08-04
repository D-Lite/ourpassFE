<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand app-font">
    <EssentialLink></EssentialLink>

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

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
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
