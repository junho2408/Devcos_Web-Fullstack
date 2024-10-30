
// 클래스 생성, 생성자, getter & setter

class Employee {  
    // 생성자
    constructor(
        private _empName : string,
        private _age : number, 
        private _empJob : string
    ){}

    // get/set
    get empName(){
        return this._empName;
    }

    set empName(val : string){
        this._empName = val;
    }
  
    printEmp = (): void => {
      console.log(
        `이름 : ${this._empName}, 나이 : ${this._age}, 직업 : ${this._empJob}`
      );
    };
  }
  
  let employee1 = new Employee('junho', 20, 'studier');
  employee1.empName = 'lee';
  employee1.printEmp();