"use strict";
// The format of the date would be only numbers and slashes, then the file here'd been necessary.
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // Tue Oct 19 2021
    var dateParts = dateString.split(' ').map(function (value) {
        return value;
    }); // {'24','12','2021'}
    return new Date(dateParts[3]);
};
exports.dateStringToDate = dateStringToDate;
