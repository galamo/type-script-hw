interface IUser {
    password: string,
    userName: string,
    age: number
}

enum SeniorityTypes {
    years = 184000000,
    days = 84000000,

}
class User {
    constructor(public password: string,
        public userName: string,
        public age: number
    ) { }

    sayHi() {
        return "User Instance"
    }
}
class Customer extends User {
    public rank: string;
    public creditCard: string;
    constructor(_rank: string, _cc: string, password: string, userName: string, age: number) {
        super(password, userName, age)
        this.rank = _rank;
        this.creditCard = _cc;
    }

    sayHi() {
        return "I am a customer , please give me service"
    }
}

class Employee extends User {
    public role: string;
    public salary: number;
    public seniority: Date
    constructor(_role: string, _sal: number, sen: Date, password: string, userName: string, age: number) {
        super(password, userName, age)
        this.role = _role;
        this.salary = _sal;
        this.seniority = sen;
    }

    getSeniority(seniorityType: SeniorityTypes) {
        //HW iomplement in years
    }

    sayHi() {
        return "Good Morning customer, how are you?"
    }


}

const employee = new Employee("manager", 1000, new Date(), "1234", "roe@gmail.com", 22)
const customer = new Customer("A", "cr-1234", "galamo", "galamo@gmail.com", 31);
const user = new User("1234", "roe@gmail.com", 22)

const users = [employee, customer, user]

users.forEach((u: Customer) => {
    console.log(u.userName)
})