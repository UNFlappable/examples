console.log("start");
console.log(new Date().getTime()/1000+" " +"fuction çalışma baslangıcı");

const gecikme = (sure) => {
  const date = new Date().getTime()
 


  while (new Date().getTime() < (date + sure)) {
    // console.log(new Date().getTime());;
  ;
  }
  setTimeout(() => {
    console.log("settime inside fuction");
    console.log(new Date().getTime()/1000);
    
},2000);
};
gecikme(3000);



setTimeout(() => {
    console.log("setTimeout dişarıdaki");
    console.log(new Date().getTime()/1000);
   
}, 1000);

console.log("END");
console.log(new Date().getTime()/1000);
