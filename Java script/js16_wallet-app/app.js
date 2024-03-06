

//! selectors
// gelir ekleme

const ekleBtn =document.querySelector("#ekle-btn")
const gelirInput =document.querySelector("#gelir-input")
const ekleForm =document.querySelector("#ekle-formu")
const gelirinizTd =document.querySelector("#geliriniz")
const giderinizTd =document.querySelector("#gideriniz")
const kalanTd =document.querySelector("#kalan")
// Harcamaları Ekleme
const harcamaFormu =document.querySelector("#harcama-formu")
const tarihInput =document.querySelector("#tarih")
const miktarInput =document.querySelector("#miktar")
const harcamaAlani =document.querySelector("#harcama-alani")

const harcamaBody =document.querySelector("#harcama-body")

// formları temizle
const temizleBtn =document.querySelector("#temizle-btn")

// const

// variabless

let gelirler=0
let harcamaListesi=[]


// sayfa yenilenince 
window.addEventListener("load",()=>{
    gelirler=Number(localStorage.getItem("gelirler")) || 0
    gelirinizTd.textContent=gelirler
    tarihInput.valueAsDate=new Date()
})



// gelir ekleme

ekleForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    gelirler+= Number(gelirInput.value)
    console.log(gelirler);
    ekleForm.reset()


    localStorage.setItem("gelirler",gelirler)
    gelirinizTd.textContent=gelirler



})




// Harcamaları Ekleme

harcamaFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    const yeniHarcamaListesi={
        tarih: tarihInput.value,
        miktar: miktarInput.value,
        alan :harcamaAlani.value,
        id : new Date().getTime()
    }
    harcamaListesi.push(yeniHarcamaListesi)
   

    harcamaFormu.reset()
    tarihInput.valueAsDate=new Date()

    console.log(yeniHarcamaListesi);
    console.log(harcamaListesi);
    localStorage.setItem("harcamalar",JSON.stringify(harcamaListesi))



})

=()=>{ 

    
}