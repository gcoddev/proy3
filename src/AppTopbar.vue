<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img src="@/assets/images/upea_logo.png" alt="Logo" />
      <span>ADMINSTRACION DE PUBLICACIONES</span>
    </router-link>
    <button
      class="p-link layout-menu-button layout-topbar-button"
      @click="onMenuToggle"
    >
      <i class="pi pi-bars"></i>
    </button>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top mr-4">
      <li class="title-hover" data-title="Eventos">
        <router-link to="/events" class="p-link layout-topbar-button">
          <i class="pi pi-calendar"></i>
          <span>Eventos</span>
        </router-link>
      </li>
      <li class="title-hover" data-title="Configuracion">
        <router-link to="/config" class="p-link layout-topbar-button">
          <i class="pi pi-cog"></i>
          <span>Configuracion</span>
        </router-link>
      </li>
      <li class="title-hover" data-title="Perfil">
        <router-link to="/profile" class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Perfil</span>
        </router-link>
      </li>
      <li class="title-hover" data-title="Cerrar sesion">
        <button class="p-link layout-topbar-button" @click="cerrarSesion()">
          <i class="pi pi-sign-out"></i>
          <span>Cerrar sesion</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    onMenuToggle(event) {
      this.$emit("menu-toggle", event);
    },
    onTopbarMenuToggle(event) {
      this.$emit("topbar-menu-toggle", event);
    },
    // topbarImage() {
    //   return this.$appState.darkTheme
    //     ? "images/logo-white.svg"
    //     : "images/logo-dark.svg";
    // },
		...mapMutations(['cerrarSesion'])
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    },
  }
};
</script>

<style scoped>
.p-link.router-link-exact-active {
  color: var(--primary-color);
}
.title-hover {
  position: relative;
}
.title-hover[data-title]:hover::after {
  content: attr(data-title);
  padding: 4px 8px;
  color: var(--primary-color-text);
  position: absolute;
  left: 0;
  top: 100%;
  white-space: nowrap;
  z-index: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #222;
  background-color: var(--text-color-secondary);
  border-color: var(--primary-color-text);
}
</style>