"use strict";
class MedicalRecord {
    constructor(id, customer, results, date) {
        this.id = id;
        this.customer = customer;
        this.results = results;
        this.date = date;
        this.status = new MedicalStatus();
    }
}
