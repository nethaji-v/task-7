class Employee {
    constructor(companyId, departmentId, firstName, lastName, emailId, age, salary) {
      this.companyId = companyId;
      this.departmentId = departmentId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailId = emailId;
      this.age = age;
      this.salary = salary;
    }
  
    calculateBonus() {
      return this.salary ; 
    }
  }
  
  class Manager extends Employee {
    constructor(companyId, departmentId, firstName, lastName, emailId, age, salary, numSubordinates) {
      super(companyId, departmentId, firstName, lastName, emailId, age, salary);
      this.numSubordinates = numSubordinates;
    }
  
    calculateBonus() {
      return this.salary  + this.numSubordinates ; 
      
    }
  }
  
  class Engineer extends Employee {
    constructor(companyId, departmentId, firstName, lastName, emailId, age, salary, numProjectsCompleted) {
      super(companyId, departmentId, firstName, lastName, emailId, age, salary);
      this.numProjectsCompleted = numProjectsCompleted;
    }
  
    calculateBonus() {
      return this.salary + this.numProjectsCompleted ; 
    }
  }
  
  let employee = new Employee('1','3','nethaj','vemula','nethaji@121',21,10000);
  let manager = new Manager( '5','8','dharan','vemula','dharran@121',22,200000,5);
  let engineer = new Engineer('7','6','hari','vemula','harai@121',23,40000,20);
  
  console.log(employee.calculateBonus());  
  console.log(manager.calculateBonus());  
  console.log(engineer.calculateBonus());  
  