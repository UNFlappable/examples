// TANIMLAMALAR
const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

//! FUNCTION CREATION
// içerigi fetch ile çekip doma yazdıran function.
//! GETDATA
const getData = () => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((res) =>{ 
       if (!res.ok) {
        throw new Error(cardDiv.innerHTML=`
        <img src="./img/error.gif" />
        `)
       } 
        
        return res.json()})

    .then((data) => {
        
      data.forEach((data) => {
        cardDiv.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4">
      <div style="height:200px;">
        <img src="${data.url}" class="w-100 h-100" alt="...">
      </div>
        </div>
                       
            `;
   
      });
    }).catch((err)=>{
        console.log("Error fetching data:", err)
    })
}

// zamanı yazdıran function sayfa kapanana kadar çalışır durdurmak için clearInterval yazılabilir 
//! tarihAlma
const tarihAlma=()=>{
 let zamanAyarlama=setInterval(()=>{tarih.innerText=`${new Date().toLocaleString()}`},1000)
}



// removeLoading function yüklenme effectini sil ve veriyi getir 
//! removeLoading


const removeLoading = () => {
  loadingDiv.remove();
  getData();
  tarihAlma();
};

// buttona basınca yeni resimler  ekleyip araya loading sıkıştırıyor
//! getNewImages
const getNewImages = () => {
  cardDiv.innerHTML = `<img src="./img/loading.gif" />`;
  setTimeout(() => {
    cardDiv.innerHTML = "";
    getData();
  }, 500);
};





// sonuc olarak function yazdıktan sonra bu işlemin düzgün çalışması için sadece 2-3 satır kod yazmamız yeterli :)

//!  1 sn sonra  removeLoading function çalıştırır  o functionda içerinde getdata function oldugu için yukarıda yazdıgımız data çagırma işlemini yapar. yanı kısaca getData() işlemini 1 sn sonra yapıyoruz süreyi kendiniz belirleyebilirsiniz

setTimeout(removeLoading, 2000);



btn.addEventListener("click", getNewImages);


