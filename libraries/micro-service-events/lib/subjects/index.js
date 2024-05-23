"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
var Subject;
(function (Subject) {
    Subject["paymentComleted"] = "payment:completed";
    Subject["paymentIncomleted"] = "payment:incompleted";
    Subject["paymentProcessing"] = "payment:processing";
    Subject["accountCreated"] = "account:created";
    Subject["busAdded"] = "bus:added";
    Subject["busUpdated"] = "bus:updated";
    Subject["routeAdded"] = "route:added";
    Subject["routeUpdated"] = "route:updated";
    Subject["scheduleAdded"] = "schedule:added";
    Subject["scheduleUpdated"] = "schedule:updated";
})(Subject || (exports.Subject = Subject = {}));
