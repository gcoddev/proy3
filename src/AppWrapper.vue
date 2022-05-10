<template>
  <router-view></router-view>
</template>

<script>
// import { mapMutations } from 'vuex';
import EventBus from "./AppEventBus";
import axios from "axios";
import { mapMutations } from 'vuex';

export default {
  themeChangeListener: null,
  mounted() {
    this.themeChangeListener = (event) => {
      const elementId = "theme-link";
      const linkElement = document.getElementById(elementId);
      const cloneLinkElement = linkElement.cloneNode(true);
      const newThemeUrl = linkElement
        .getAttribute("href")
        .replace(this.$appState.theme, event.theme);

      cloneLinkElement.setAttribute("id", elementId + "-clone");
      cloneLinkElement.setAttribute("href", newThemeUrl);
      cloneLinkElement.addEventListener("load", () => {
        linkElement.remove();
        cloneLinkElement.setAttribute("id", elementId);
      });
      linkElement.parentNode.insertBefore(
        cloneLinkElement,
        linkElement.nextSibling
      );

      this.$appState.theme = event.theme;
      this.$appState.darkTheme = event.dark;
    };

    EventBus.on("theme-change", this.themeChangeListener);
  },
  beforeUnmount() {
    EventBus.off("theme-change", this.themeChangeListener);
  },
  methods: {
    ...mapMutations(['cerrarSesion']),
    // async getApi() {
    //   try {
    //     let api = await axios.get('https://serviciopagina.upea.bo/api/')
    //     console.log(api.data);
    //   } catch (error) {
    //     //
    //   }
    // }
    async verificarToken() {
      try {
        let uA = JSON.parse(localStorage.getItem("userAuth"));
        let tkn = {
          token: uA.token,
        };
        let tkv = await axios.post(
          "https://serviciopagina.upea.bo/api/VerificarToken/",
          tkn
        );
        if (tkv.data.message == "Ocurrió un error") {
          this.cerrarSesion()
        } else {
          console.log('token valido');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.verificarToken();
    if (localStorage.getItem("auth") != "true") {
      this.$router.push("login");
    }
  },
};
</script>