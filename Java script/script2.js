

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  name: "mahmut"
//   fullName: function () {
//     // return firstName + " " + lastName;
//     return this.firstName + " " + this.lastName;
//   },
  
};

console.log(person.name);
console.log(this.Location);
console.log(person.lastName);
console.log(person["lastName"]);

console.log(this.name);


// console.log(person.fullName());

person.name

person["name"]



const arac={
  marka:"Renault",
  model:"Clio",
  name1: {
    name:"reno",
    name2:{name:"renoo"} },

  
  yil:2018,
  renk:"Beyaz",
  yakit:"Dizel",
  saatUcreti:60
};


console.log(arac.name1);

const{marka,name1,yil}=arac


console.log(name1);


const x1 =[
{
  name:"har",
  sname:"haru",
  kname:"harun"
},

{
  name:"har1",
  sname:"haru1",
  kname:"harun1"
},

{
  name:"har2",
  sname:"haru2",
  kname:"harun3"
}
]

console.log(x1);

x1.forEach((person) =>{
  const { name,sname ,kname } = person
  console.log(name,sname,kname)});

