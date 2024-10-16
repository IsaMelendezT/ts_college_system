"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["PENDING"] = 0] = "PENDING";
    PaymentStatus[PaymentStatus["COMPLETED"] = 1] = "COMPLETED";
    PaymentStatus[PaymentStatus["FAILED"] = 2] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
