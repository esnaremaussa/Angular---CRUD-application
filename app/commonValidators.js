System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CommonValidators;
    return {
        setters:[],
        execute: function() {
            CommonValidators = (function () {
                function CommonValidators() {
                }
                CommonValidators.isEmailValid = function (control) {
                    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value))) {
                        return {
                            isEmailValid: true
                        };
                    }
                    else {
                        return null;
                    }
                };
                CommonValidators.cannotConstainSpace = function (control) {
                    if (control.value.indexOf(" ") >= 0) {
                        return {
                            cannotContainSpace: true
                        };
                    }
                    else {
                        return null;
                    }
                };
                return CommonValidators;
            }());
            exports_1("CommonValidators", CommonValidators);
        }
    }
});
//# sourceMappingURL=commonValidators.js.map