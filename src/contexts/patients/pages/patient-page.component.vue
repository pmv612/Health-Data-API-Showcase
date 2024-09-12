<template>
  <div>
    <!-- Page composition: toolbar, patient list, footer -->
    <toolbar-component></toolbar-component>
    <patient-list></patient-list>
    <footer-component></footer-component>
  </div>
</template>

<script>
import PatientList from "@/contexts/patients/components/patient-list.component.vue";
import FooterComponent from "@/layout/footer.component.vue";
import ToolbarComponent from "@/layout/toolbar.component.vue";

export default {
  name: 'PatientPage',
  components: {ToolbarComponent, FooterComponent, PatientList}
};
</script>
