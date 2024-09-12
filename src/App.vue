<template>
  <div id="app">
    <patient-page></patient-page>
  </div>
</template>

<script>
import PatientPage from '@/contexts/patients/pages/patient-page.component.vue';

export default {
  name: 'App',
  components: {
    PatientPage
  }
};
</script>

<style>
/* Global styles */
</style>
