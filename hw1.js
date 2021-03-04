let ford = `car`;


ford = `Honda`;


const number = `FourHundred`;


if(true)
{
    
    var truthers = true;
}
console.log(truthers); 


if(true)
{
    let string = "YEET";
    console.log(string); 
}


console.log(ford);

const const1 = [];


const1.push("YOLO", "WTF", "LMAO");
console.log(const1);


const empty = [];


empty.name = "Buck";
empty.age = "25";
console.log(empty);


console.log(`Hello my name is ${empty.name}!`);


function greet(name, age)
{
    console.log(`Hello my name is ${name}! I am ${age}!`);
}


const {name, age} = empty;
console.log(name, age);
greet(name, age);


let arrow1  = () => 
{
    console.log("Hello World!");
}


let arrow2 = (str) =>
{
    console.log(str);
}

arrow2("bruh...");


let arrow3 = (num1, num2) =>
{
    return "STOP YOU'VE VIOLATED THE LAW!";
}

arrow3();
console.log(arrow3());


setTimeout(() => {console.warn("SWAG!")}, 2999);


for (const element of const1)
{
    console.log(element);
}


for (const element in empty)
{
    console.log(element);}