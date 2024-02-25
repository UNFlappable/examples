

// 1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?
// isimFormatla(ad, soyad); // "Yılmaz, Ahmet"


let isim = "harun"
let soyisim="yny"


const isimFormatla = (isim,soyisim)=>{
    let y =isim[0].toLocaleUpperCase() + isim.slice(1)
let x =soyisim[0].toLocaleUpperCase() + soyisim.slice(1)

return `${y} ${x} `
}

console.log(isimFormatla(soyisim,isim))








// 2. Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?
// input :"Pijamalı hasta, yağız şoföre çabucak güvendi.";
// output : // Pijamali hasta, yagiz sofore cabucak guvendi.

const text = "Pijamalı hasta, yağız şoföre çabucak güvendi."

const replaceToEng = (text) => {text.replace("ı","i")}
console.log(replaceToEng(text));







// 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// output : [3, 4, 5]




const sayilar1 =[1, 2, 3, 4, 5]
const sayilar2 =[3, 4, 5, 6, 7]


for(let i=0;i<=sayilar1.length;i++){

    for(let j=0;j<=sayilar2.length;j++){
//   console.log(j);
//     console.log("***");
    }
  
}

// 1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?
// isimFormatla(ad, soyad); // "Yılmaz, Ahmet"


function isimFormatla1(ad, soyad){
    return `${soyad[0].toUpperCase() + soyad.slice(1)}, ${ad[0].toUpperCase() + ad.slice(1)}`;
  }
  
  
  
  
  
  
  
  // 2. Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?
  // input :"Pijamalı hasta, yağız şoföre çabucak güvendi.";
  // output : // Pijamali hasta, yagiz sofore cabucak guvendi.
  
  function fixText(text){
  
   const chars = {
    'ç': 'c',
    'Ç': 'C',
    'ğ': 'g', 
    'Ğ': 'G',
    'ı': 'i', 
    'İ': 'I',
    'ö': 'o', 
    'Ö': 'O',
    'ş': 's', 
    'Ş': 'S',
    'ü': 'u', 
    'Ü': 'U'
  };
  
  return text.replace(/[çÇğĞıİöÖşŞüÜ]/g, match => {
   console.log(match);
   return chars[match]});
  
  }
  
  function fixText2(text) {
   
  }
  
  // 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
  // input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
  // output : [3, 4, 5]
  const arr11 =[1, 2, 3, 4, 5]
  const arr22 =[3, 4, 5, 6, 7]


  function findCommon(arr1, arr2){
    let commonArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        commonArr.push(arr1[i])
      }
    }
    return commonArr;
  }






  console.log(findCommon(arr11, arr22));

  // 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
  // input : [1, 2, 3, 4, 5]
  // output : 28
  const dizi=[1, 2, 3, 4, 5]

  const sumof4= (dizi) =>{
   const sonuc= dizi.map(num=>num**2).filter(num=>num%2===0).reduce((acc,num)=>acc+=num)*2
   console.log(sonuc);
  }
  sumof4(dizi)

  function sumOfEvenSquares(arr){
    return arr.map(num => num ** 2).filter(num => num % 2 === 0).map(num => num *2).reduce((acc, num) => acc + num, 0);
  }
  sumOfEvenSquares([1, 2, 3, 4, 5])
  
  // 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
  
  function reverseArray(arr){
    let reversedArr = [];
    arr.forEach((item) => reversedArr.unshift(item));
    return reversedArr;
  }
  