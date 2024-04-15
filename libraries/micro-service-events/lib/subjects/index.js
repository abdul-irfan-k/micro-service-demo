"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
var Subject;
(function (Subject) {
    Subject["paymentComleted"] = "payment:completed";
    Subject["paymentIncomleted"] = "payment:incompleted";
    Subject["paymentProcessing"] = "payment:processing";
    Subject["accountCreated"] = "account:created";
})(Subject || (exports.Subject = Subject = {}));
