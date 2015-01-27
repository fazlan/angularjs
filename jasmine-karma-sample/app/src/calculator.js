'use strict';

var org_namespace = {};
org_namespace.Calculator = {
    result: 0,
    add: function (x, y) {
        this.result = x + y;
    },

    multiply: function (x, y) {
        this.result = x * y;
    },

    reset: function () {
        this.result = 0;
    }
};