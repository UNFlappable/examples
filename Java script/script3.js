

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


// 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
// input : [1, 2, 3, 4, 5]
// output : 28


// 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).