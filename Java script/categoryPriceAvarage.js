/* const arr=[1,4,3,22,11]
const arr2=arr.toReversed()
console.log(arr);
console.log(arr2);



console.log(arr.toSorted((a,b)=>a-b).reverse());
console.log(arr); */

// herhangi bi arraydeki aynı categorylerdeki priceların ortalama değerleri
// yani Electronics category sindeki priceları toplayacak eğer ortalaması 50 değerinden yüksek ise bize dönecek
let products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 80, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  { name: "Product 8", price: 40, category: "Electro" },
  { name: "Product 8", price: 70, category: "Elecxtro" },
  { name: "Product 8", price: 80, category: "Elecxtro" },
];
products.push({ name: "Product 8", price: 80, category: "pc" })
const uniqueCatagories = [];

products.forEach((product) => {
  if (!uniqueCatagories.includes(product.category)) {
    uniqueCatagories.push(product.category);
  }
});
// priceAvarage fonsiyonu herhangi bir arrayde çalışır.
const priceAvarage = (arrayName) => {
  uniqueCatagories.forEach((uniqueCatagory) => {
    const priceSum = arrayName
      .filter((product) => product.category === uniqueCatagory)
      .map((prices) => prices.price);
    const avarage = priceSum.reduce((a, b) => a + b) / priceSum.length;
    if (avarage >= 50) {
      return console.log(`${uniqueCatagory} avarage price is ${avarage}`);
    }
  });
};

priceAvarage(products);

