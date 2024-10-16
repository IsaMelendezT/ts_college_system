"use strict";
class Customer {
    constructor(id, name, email, phone) {
        this.bookings = [];
        this.healthData = [];
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.medicalStatus = new MedicalStatus();
        this.trainingStatus = new TrainingStatus();
        this.preferences = new Preferences();
    }
}
