class Person {

    constructor(name, age, pet) 
    {
        this.name = name;
        this.age = age;
        this.pet = pet;
    }

    getName() 
    {
        return this.name;
    }

    getAge() 
    {
        return this.age;
    }
}

let p = new Person("Jimmy", 25, "Lab");
console.log(p.getName());
console.log(p.getAge());
console.log(p.pet);


class Employee extends Person
{
    constructor(name, age, pet, ident, companyName) 
    {
        super(name,age,pet);

        this.companyName = companyName;
        this.ident = ident;
    } 

    getCompanyName()
    {
        return this.companyName;
    }

    getid()
    {
        return this.ident;
    }
}

let q = new Employee("Jimmy", 25, "Lab", "F7354", "Web Development Solutions Incorporated");
console.log(q.getid());
console.log(q.companyName);

class Manager extends Employee
{
    constructor(name, age, pet, ident, companyName, employees)  
    {
        super(name,age,pet,ident, companyName); 
    
        this.employees = employees;
    } 

    newEmployees() 
    {
        this.employees.push(`${this.name}, ${this.ident}`);
    }
}

let r = new Manager("Brett", 31, "Husky", "X2833", "Web Development Solutions Incorporated", ["Golf", "Trains", "Airplanes"] );
r.newEmployees();
console.log(r.employees);


class Clerk extends Employee
{
    constructor(name, age, pet, ident, companyName, superID)  
    {
        super(name,age,pet,ident, companyName); 

        this.superID = superID;
    } 

    getSuperID()
    {
        return this.superID;
    }
}


let currentID = 1;


let boss = new Manager("Tanner", 22, "Dolphin", currentID++, "Web Development Solutions Incorporated", [] );
console.log(boss);


let clerk1 = new Clerk("Rebecca", 33, "Whale", currentID++, "Web Development Solutions Incorporated", boss.getid());
console.log(clerk1);


let clerk2 = new Clerk("Ricky", 30, "Deer", boss.getid(), "Web Development Solutions Incorporated", currentID++);
console.log(clerk2);


boss.newEmployees({name: clerk1.name, ident: clerk1.ident})
console.log(boss);


boss.newEmployees({name: clerk2.name, ident: clerk2.ident})
console.log(boss);


console.log(clerk1.getSuperID());
console.log(clerk2.getSuperID());


console.log(boss.employees);