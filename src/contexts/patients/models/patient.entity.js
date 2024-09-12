/**
 * Class representing a Patient entity.
 * Encapsulates the properties of a patient as defined by the API.
 *
 * @class Patient
 */
export class Patient {
    /**
     * Create a new Patient instance.
     * @param {string} id - Unique identifier for the patient.
     * @param {string} email - Patient's email address.
     * @param {string} name - Patient's full name.
     * @param {string} address - Patient's full address.
     * @param {string} phone - Patient's phone number.
     * @param {string} gender - Patient's gender.
     * @param {string} picture - URL to the patient's picture.
     * @param {number} age - Patient's age.
     * @param {string} city - Patient's city of residence.
     * @param {string} country - Patient's country of residence.
     */
    constructor(id, email, name, address, phone, gender, picture, age, city, country) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.gender = gender;
        this.picture = picture;
        this.age = age;
        this.city = city;
        this.country = country;
    }
}
