<template>
  <div>
    <!-- Main section to display the list of patient cards -->
    <div class="patient-info">
      <h3 class="patient-title">Patient Information</h3>
      <div class="card-container">
        <!-- Iterate over patients array to display each patient as a card -->
        <div v-for="patient in patients" :key="patient.id" class="patient-card">
          <!-- Patient Picture -->
          <img :src="patient.picture" :alt="`Picture of ${patient.name}`" class="patient-picture">
          <!-- Patient Information -->
          <p><strong>Name:</strong> {{ patient.name }}</p>
          <p><strong>ID:</strong> {{ patient.id }}</p>
          <p><strong>Email:</strong> {{ patient.email }}</p>
          <p><strong>Phone:</strong> {{ patient.phone }}</p>
          <p><strong>Gender:</strong> {{ patient.gender }}</p>
          <p><strong>Age:</strong> {{ patient.age }}</p>
          <p><strong>Address:</strong> {{ patient.address }}</p>
          <p><strong>City:</strong> {{ patient.city }}</p>
          <p><strong>Country:</strong> {{ patient.country }}</p>
          <!-- Button to remove the patient card -->
          <button @click="removePatient(patient.id)" aria-label="Remove patient">Remove</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Import the service responsible for fetching patient data
import { patientService } from '@/contexts/patients/services/patient.service.js';

export default {
  name: 'PatientList',
  data() {
    return {
      // Array to store the patient data fetched from the API
      patients: []
    };
  },
  methods: {
    /**
     * Fetches patient data from the API using the patient service.
     * Maps the response into Patient entity instances.
     */
    async fetchPatients() {
      try {
        const rawPatients = await patientService.getPatients();
        // Assign the mapped patients array to the local state
        this.patients = rawPatients;
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    },

    /**
     * Removes a patient from the displayed list by filtering out the selected patient.
     *
     * @param {string} id - The unique ID of the patient to be removed.
     */
    removePatient(id) {
      // Filter out the patient with the matching ID
      this.patients = this.patients.filter(patient => patient.id !== id);
    }
  },
  /**
   * Lifecycle hook that runs after the component is mounted.
   * It triggers the fetchPatients method to load data when the component is rendered.
   */
  mounted() {
    this.fetchPatients();
  }
};
</script>

<style scoped>
  /* Responsive design: Adjust the flex layout for small screens */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.patient-card {
  width: 100%;
  max-width: 400px;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  background-color: #282828;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Styling for patient picture */
.patient-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.patient-info {
  margin: 20px;
  text-align: center;
}

.patient-title{
  font-size: 28px;
  font-weight: bold;
  color: #333;
}
</style>
