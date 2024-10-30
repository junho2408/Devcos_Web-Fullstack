// Interface,Class,Literal-BASE
// 변수 데이터 타입
var stdId;
var stdName;
var age;
var gender;
var course;
var completed;
// 열거형 데이터 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "Male";
    GenderType["Female"] = "Female";
    GenderType["GenderNeutral"] = "Neutral";
})(GenderType || (GenderType = {}));
;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 1234;
        this.stdName = 'park';
        this.age = 25;
        this.gender = 'Male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("\uC774\uB984 \uC124\uC815 : ".concat(this.stdName));
    };
    return MyStudent;
}());
var MyInstance = new MyStudent();
MyInstance.setName('엘리스');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        gender: 'Female',
        course: 'javascript',
        completed: true
    };
}
var user = {
    name: 'john',
    age: 25
};
