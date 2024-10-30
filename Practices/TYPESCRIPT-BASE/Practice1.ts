
// Interface,Class,Literal-BASE

// 변수 데이터 타입
// let stdId : number;
// let stdName : string;
// let age : number;
// let gender : GenderType;
// let course : string;
// let completed : boolean;

// 열거형 데이터 타입
enum GenderType{
    Male = 'Male',
    Female = 'Female',
    GenderNeutral = 'Neutral'
};

interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    // 리터럴 값
    gender? : 'Male' | 'Female';
    course? : string;
    completed? : boolean;
    setName? : (name : string) => void;
    getName? : () => string;
}

class MyStudent implements Student{
    stdId: number = 1234;
    stdName = 'park';
    age = 25;
    gender : 'Male' | 'Female' = 'Male';
    course = 'node.js';
    completed = true;

    setName(name: string) : void{
        this.stdName = name;
        console.log(`이름 설정 : ${this.stdName}`);
    }
}

const MyInstance = new MyStudent();
MyInstance.setName('엘리스');

function getInfo(id:number) : Student{
     return{
        stdId:id,
        stdName : 'lee',
        gender : 'Female',
        course : 'javascript',
        completed : true
    };
}

const user : {name : string, age : number} = {
    name : 'john',
    age : 25
};