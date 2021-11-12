"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                // If collection is a string, do this logic instead:
                // ~~~logic to compare and swap characters in string
                // not to mix up with the use of typeof which is inappropriate in typescript syntax
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
