<template>
  <pv-toolbar>
    <!-- Toolbar slot for the title -->
    <template v-slot:start>
      <span class="toolbar-title">Health Data API Showcase</span>
    </template>
  </pv-toolbar>
</template>

<script>
export default {
  name: 'ToolbarComponent'
};
</script>

<style scoped>
.toolbar-title {
  font-size: 24px;
  font-weight: bold;
}
</style>
