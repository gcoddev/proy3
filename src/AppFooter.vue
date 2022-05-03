<template>
	<div class="layout-footer">
		<img alt="Logo" src="@/assets/images/sie_logo.png" width="100" class="mr-2" />
		by
		<span class="font-medium ml-2">SIE - UPEA</span>
	</div>
</template>

<script>
	export default {
		name: "AppFooter",
		computed: {
			darkTheme() {
				return this.$appState.darkTheme;
			}
		}
	}
</script>