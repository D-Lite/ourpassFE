<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    class="links"
    :class="{ isActive: isSelect }"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label style="margin-left: -22px">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    isSelect: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>
.links {
  font-weight: 900;
  color: #45484a;
}
.isActive {
  border-bottom: 3px #4d506b solid;
  color: #362ea1;
}
</style>
