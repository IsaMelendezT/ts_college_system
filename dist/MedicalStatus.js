"use strict";
var MedicalStatus;
(function (MedicalStatus) {
    MedicalStatus[MedicalStatus["CLEARED"] = 0] = "CLEARED";
    MedicalStatus[MedicalStatus["PENDING"] = 1] = "PENDING";
    MedicalStatus[MedicalStatus["NOT_CLEARED"] = 2] = "NOT_CLEARED";
})(MedicalStatus || (MedicalStatus = {}));
