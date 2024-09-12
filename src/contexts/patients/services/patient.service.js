import axios from 'axios';
import { Patient } from '@/contexts/patients/models/patient.entity.js';

/**
 * Service responsible for fetching patient data from the API.
 * This module uses axios to make HTTP requests.
 */
export const patientService = {
    /**
     * Fetches a list of patients from the public Random User API.
     *
     * @returns {Promise<Array>} A promise that resolves to an array of patient data.
     */
    async getPatients() {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=10');
            // Map the response to Patient entities
            return response.data.results.map(p => new Patient(
                p.login.uuid,
                p.email,
                `${p.name.first} ${p.name.last}`,                     // Full name
                `${p.location.street.number} ${p.location.street.name}, ${p.location.city}, ${p.location.state}, ${p.location.country}, ${p.location.postcode}`, // Full address
                p.phone,
                p.gender,
                p.picture.large,                                     // Picture URL
                p.dob.age,                                           // Age
                p.location.city,
                p.location.country
            ));
        } catch (error) {
            console.error('Error fetching patients:', error);
            throw error; // Re-throw the error for higher-level handling
        }
    }
};
