"use strict";
var BookingStatus;
(function (BookingStatus) {
    BookingStatus[BookingStatus["PENDING"] = 0] = "PENDING";
    BookingStatus[BookingStatus["CONFIRMED"] = 1] = "CONFIRMED";
    BookingStatus[BookingStatus["CANCELED"] = 2] = "CANCELED";
})(BookingStatus || (BookingStatus = {}));
