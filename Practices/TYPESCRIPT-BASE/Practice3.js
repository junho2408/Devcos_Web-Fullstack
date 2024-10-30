// 클래스 생성, 생성자, getter & setter
var Employee = /** @class */ (function () {
    // 생성자
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log("\uC774\uB984 : ".concat(_this._empName, ", \uB098\uC774 : ").concat(_this._age, ", \uC9C1\uC5C5 : ").concat(_this._empJob));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get/set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('junho', 20, 'studier');
employee1.empName = 'lee';
employee1.printEmp();
