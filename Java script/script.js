let products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];
// console.log(products[products.length-1].category);




const above50 = products.filter((p) => (p.category === "Electronics")).map( k=>k.price)



const avarage50 = above50.reduce((a,b)=>(a+b))/above50.length

console.log(` category: 'Electronics'average: ${avarage50}`);
console.log(above50);
console.log(typeof(above50));

console.log(products);


//    You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each  category, and then return an array of objects containing only the categories that have an average price  above 50.

const Elect = [];
products.map((catagorys) => {
    if (products.category === "Electronics") {
        Elect = catagorys;
    }
});

console.log(Elect);



const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];

[{ department: "HR", average: 71666 }];

// You are given an array of objects representing a collection of employees, each with a name, salary,and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

//! her bir department için bu kodu döndürsün ve aldığın ortalama değeri her bir objenin sonuna push yapsın.

const salaries = employees.filter(depart=>depart.department==="IT").map(i=>i.salary)
const average11 = salaries.reduce(( a,b )=> a+b ,0 )/salaries.length

if (average11>=65000) {console.log("ajsdn");}





// salaries.reduce(( a,b )=> a+b ,0 )
console.log(average11);
console.log(salaries);

const h2 =document.querySelector("h2")
const input =document.querySelector("input")

document.addEventListener("keydown",run=>console.log(run.key))
document.querySelector("input").addEventListener("onclick",run=>console.log(run.value))


console.log(h2.textContent);
