"use strict";
var SpacecraftStatus;
(function (SpacecraftStatus) {
    SpacecraftStatus[SpacecraftStatus["OPERATIONAL"] = 0] = "OPERATIONAL";
    SpacecraftStatus[SpacecraftStatus["MAINTENANCE"] = 1] = "MAINTENANCE";
    SpacecraftStatus[SpacecraftStatus["OUT_OF_SERVICE"] = 2] = "OUT_OF_SERVICE";
})(SpacecraftStatus || (SpacecraftStatus = {}));
