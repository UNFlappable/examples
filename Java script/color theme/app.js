// Kodlar buraya

const btn1 = document.getElementById("btn1")
const btn2 = document.querySelector(".btn-over")
const backG = document.querySelector("body")
const cInput =document.getElementById("colorInput")
const cText =document.querySelector("#colorText")






//! Aradaki fark, oninput olayının içerik değiştirildikten hemen sonra gerçekleşmesi, onchange olayının ise öğe odağını kaybettiğinde gerçekleşmesidir.


cInput.oninput = function() {
    // Seçilen renk değerini alın
    const secilenRenk = cInput.value;

    backG.style.backgroundColor=secilenRenk
   
    cText.textContent= secilenRenk
};
  
   
btn1.onclick =() =>{
    const num1= Math.round(Math.random()*255)
    const num2= Math.round(Math.random()*255)
    const num3= Math.round(Math.random()*255)
    
    const randomcolor= ()=>{
       
        
        return ` rgb(${num1} ,${num2} ,${num3})`}
    const newcolor = randomcolor();
    backG.style.backgroundColor = newcolor;


    const hexcolor = rgbToHex (num1, num2, num3);
    
    function rgbToHex(num1, num2, num3) {
        return "#" + componentToHex(num1) + componentToHex(num2) + componentToHex(num3);
    }
    
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    cInput.value= hexcolor
    cText.textContent= hexcolor

   
    }


   btn2.onmouseover = () =>{
    const num1= Math.round(Math.random()*255)
    const num2= Math.round(Math.random()*255)
    const num3= Math.round(Math.random()*255)

    const randomcolor= ()=>{
        
        
        return ` rgb(${num1} ,${num2} ,${num3})`}


    const newcolor = randomcolor();
    backG.style.backgroundColor = newcolor;


    

    const hexcolor = rgbToHex (num1, num2, num3);
    
    function rgbToHex(num1, num2, num3) {
        return "#" + componentToHex(num1) + componentToHex(num2) + componentToHex(num3);
    }
    
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    cInput.value= hexcolor
    cText.textContent= hexcolor
   

    }


    const xxx=document.querySelector("#copy")

    xxx.onclick=()=>{ navigator.clipboard.writeText(cInput.value) .then(() => {
        alert('Metin başarıyla kopyalandı!');
    })}
   
  

    const deleteButton = document.getElementById("btn-dlt");
const itemList = document.querySelector(".item-list ul");
deleteButton.onclick = (e) => {
  const items = itemList.querySelectorAll("li");
  if (items.length > 0) {
    items[items.length-1].remove();
  }
  if (items.length === 0) {
    alert("silinecek oge birakmadin ki kardes");
  }
};
 