"use strict";
class Booking {
    constructor(id, customer, flight, date) {
        this.id = id;
        this.customer = customer;
        this.flight = flight;
        this.date = date;
        this.status = BookingStatus.PENDING;
        this.payment = new Payment();
        this.preferences = new Preferences();
    }
}
