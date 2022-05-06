<template>
  <div class="layout-footer">
    <a href="https://sie.upea.bo/" target="_blank">
      <img
        alt="Logo"
        src="@/assets/images/sie_logo.png"
        width="100"
        class="mr-2"
      />
    </a>
    by
    <span class="font-medium ml-2">Gary</span>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    },
  },
};
</script>