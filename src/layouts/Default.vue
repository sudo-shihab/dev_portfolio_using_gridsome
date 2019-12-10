<template>
  <div class="layout p-8 min-h-screen" :class="[appTheme]" id="app-active-layout">
    <div class="app-primary-set">
      <header class="header">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__lin" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </header>
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      appTheme: "theme-forest"
    };
  },
  created() {
    if ("CURRENT_THEME" in localStorage) {
      this.appTheme = localStorage.getItem("CURRENT_THEME");
    }
  }
};
</script>


<style>
</style>
