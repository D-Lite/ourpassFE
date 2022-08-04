<template>
  <!-- navigation | css -> nav.css -->
  <nav class="bg">
    <div class="desktop-container">
      <div class="desktop-container-1">
        <div class="desktop-container-2">
          <!-- mobile menu button-->
          <span
            class="mobile-menu-button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="is_visible = !is_visible"
          >
            <span class="sr-only">Open main menu</span>
            <q-icon name="dashboard" />
          </span>
        </div>
        <div class="desktop-container-3">
          <div class="desktop-container-4">
            <span class="logo"> Paypay. </span>
          </div>
          <div class="desktop-container-5">
            <div class="desktop-container-6">
              <a href="#" class="desktop-nav-link">
                <q-icon name="dashboard" />
                <span class="desktop-nav-link-text">Dashboard</span>
              </a>
              <a
                href="#"
                class="desktop-nav-link-active isActive"
                aria-current="page"
              >
                <q-icon name="receipt" />
                <span class="desktop-nav-link-text">Invoices</span>
              </a>
              <a href="#" class="desktop-nav-link">
                <q-icon name="account_balance_wallet" />
                <span class="desktop-nav-link-text">Wallet</span>
              </a>
              <a href="#" class="desktop-nav-link">
                <q-icon name="eva-activity" />
                <span class="desktop-nav-link-text">Activity</span>
              </a>
              <a href="#" class="desktop-nav-link">
                <q-icon name="call" />
                <span class="desktop-nav-link-text">Help</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile menu show/hide based on menu state. -->
    <div class="mobile-container" v-if="is_visible">
      <div class="mobile-container-1">
        <a href="#" class="mobile-nav-link">Dashboard</a>
        <a href="#" class="mobile-nav-link-active" aria-current="page"
          >Invoices</a
        >
        <a href="#" class="mobile-nav-link">Wallet</a>
        <a href="#" class="mobile-nav-link">Activity</a>
        <a href="#" class="mobile-nav-link">Help</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "EssentialLinks",
  components: {},
  setup() {
    // reactive state
    let is_visible = ref(false);

    return {
      is_visible,
    };
  },
});
</script>

<style scoped>
.links {
  font-weight: 900;
  color: #45484a;
}
.isActive {
  border-bottom: 3px #4d506b solid;
  color: #362ea1;
}

.bg {
  background-color: #fff;
}

.desktop-container {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 80rem;
}

.desktop-container-1 {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.desktop-container-2 {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  align-items: center;
}

.desktop-container-3 {
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
}

.desktop-container-4 {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.desktop-container-5 {
  display: none;
}

.desktop-container-6 {
  display: flex;
  margin-left: 1rem;
}

.desktop-nav-link {
  display: inline-flex;
  padding-top: 1rem;
  margin: 0 40px;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  color: #45484a;
}

.desktop-nav-link-active {
  display: inline-flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-decoration: none;

  border-bottom: 3px #4d506b solid;
  color: #454680;
}

.desktop-nav-link-icon {
  color: #838383;
  width: 1.25rem;
  height: 1.25rem;
}

.desktop-nav-link-icon-active {
  color: #1d4ed8 !important;
}

.desktop-nav-link-text {
  margin-left: 10px;
}

.mobile-nav-link {
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #1f2937;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  text-decoration: none;
}

.mobile-nav-link-active {
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #4d506b;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  text-decoration: none;
}

.mobile-container-1 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  margin-top: 0.25rem;
}

.mobile-menu-button {
  display: inline-flex;
  padding: 0.5rem;
  color: #9ca3af;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
}

.logo {
  color: #454680;
  font-weight: 800;
  font-size: 1.2rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.icon {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
}

.hidden-icon {
  display: none;
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 640px) {
  .desktop-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .desktop-container-1 {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }

  .desktop-container-2 {
    display: none;
  }

  .desktop-container-3 {
    justify-content: flex-start;
    align-items: stretch;
  }

  .desktop-container-5 {
    display: block;
    margin-left: 1.5rem;
  }

  .mobile-container {
    display: none;
  }
}

@media (min-width: 1024px) {
  .desktop-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
