"use strict";
class Payment {
    constructor() {
        this.id = "";
        this.amount = 0;
        this.date = new Date();
        this.status = PaymentStatus.PENDING;
    }
}
