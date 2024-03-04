// tanımlamalar

const date = document.querySelector(".date");
const spendMoney = document.querySelector(".spendMoney");
const spendSection = document.querySelector(".spendSection");
const currentIncome = document.querySelector(".currentIncome");
const firstButton = document.querySelector(".firstButton");
const buttonEkle = document.querySelector(".buttonEkle");
const table1 = document.querySelector(".table-div .table-1");
const toplamGelir = document.querySelector(".gelir");
const toplamGider = document.querySelector(".toplamGider");
const Kalan = document.querySelector(".Kalan");



firstButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!spendSection.value || !spendMoney.value || !date.value) {
    alert("boş bırakma ulen");
  } else {
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("button");

    table1.appendChild(tr);
    tr.appendChild(th1);
    th1.textContent = date.value;
    tr.appendChild(th2);
    th2.textContent = spendMoney.value;
    tr.appendChild(th3);
    th3.textContent = spendSection.value;
    tr.appendChild(th4);
    th4.classList.add("fa-solid", "fa-trash", "text-danger");
   
    let gideriniz = Number(toplamGider.textContent);
    gideriniz +=Number( spendMoney.value);
    toplamGider.textContent = gideriniz;


    spendSection.value = spendMoney.value = date.value = "";


  }
});

table1.addEventListener("click", (e) => {
   if(e.target.classList.contains("fa-trash")){
    e.target.parentNode.remove();
   }
  
 
});

buttonEkle.addEventListener("click", (e) => {
  e.preventDefault();

  let geliriniz = Number(toplamGelir.textContent);
  geliriniz += Number(currentIncome.value);
  toplamGelir.textContent = geliriniz;
});


