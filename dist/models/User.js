var SeniorityTypes;
(function (SeniorityTypes) {
    SeniorityTypes[SeniorityTypes["years"] = 184000000] = "years";
    SeniorityTypes[SeniorityTypes["days"] = 84000000] = "days";
})(SeniorityTypes || (SeniorityTypes = {}));
class User {
    constructor(password, userName, age) {
        this.password = password;
        this.userName = userName;
        this.age = age;
    }
    sayHi() {
        return "User Instance";
    }
}
class Customer extends User {
    constructor(_rank, _cc, password, userName, age) {
        super(password, userName, age);
        this.rank = _rank;
        this.creditCard = _cc;
    }
    sayHi() {
        return "I am a customer , please give me service";
    }
}
class Employee extends User {
    constructor(_role, _sal, sen, password, userName, age) {
        super(password, userName, age);
        this.role = _role;
        this.salary = _sal;
        this.seniority = sen;
    }
    getSeniority(seniorityType) {
        //HW iomplement in years
    }
    sayHi() {
        return "Good Morning customer, how are you?";
    }
}
const employee = new Employee("manager", 1000, new Date(), "1234", "roe@gmail.com", 22);
const customer = new Customer("A", "cr-1234", "galamo", "galamo@gmail.com", 31);
const user = new User("1234", "roe@gmail.com", 22);
const users = [employee, customer, user];
users.forEach((u) => {
    console.log(u.userName);
});
