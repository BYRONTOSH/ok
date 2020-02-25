var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    function Avenger(n, e) {
        this.n = n;
        this.e = e;
    }
    Avenger.prototype.datos = function () {
        console.log(this.n + this.e);
    };
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(n, e, poder) {
        var _this = _super.call(this, n, e) || this;
        _this.poder = poder;
        return _this;
    }
    Xmen.prototype.datos = function () {
        _super.prototype.datos.call(this);
    };
    return Xmen;
}(Avenger));
var av = new Xmen("TOSH", 56, true);
console.log(av);
av.datos();
