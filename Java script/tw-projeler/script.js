

const p1=document.querySelector("#ekrem")
const p2=document.querySelector("#emir")
const score1= document.getElementById("player1")
const score2= document.getElementById("player2")
const reset = document.querySelector("#reset")
const x= document.querySelector("#input")
let playerOne="kekw"
let playerTwo="kekw2"
const kazanan=document.querySelector("#kazanan")
p1.textContent=`+1 to ${playerOne}`
p2.textContent=`+1 to ${playerTwo}`
const footer=document.querySelector("#footer")


footer.addEventListener("click",(e)=>{
console.log(e.target);
if(e.target.id==="ekrem"){
if(Number(score1.textContent)<Number(x.value)){
    score1.textContent++
    if(Number(score1.textContent)===Number(x.value)){       
        winner(playerOne,playerTwo)
     }
}
}
if(e.target.id==="emir"){  if(Number(score2.textContent)<x.value){
    score2.textContent++
    if(Number(score2.textContent)===Number(x.value)){
      
   
       winner(playerTwo,playerOne)
    }
}

}
if(e.target.id==="reset"){ score1.textContent="0"
score2.textContent="0"
x.value=""
x.focus()
p2.disabled=false
p1.removeAttribute ("disabled")
kazanan.style.display="none"

}
})



const winner=(p1,p2)=>{
    p1.disabled=true
        p2.disabled=true
    alert(`Win***${p1}`)
    kazanan.style.display="flex"
        kazanan.style.animationPlayState="running"
        kazanan.textContent=`TEBRİKLER
        ${p1}
        GEÇMİŞ OLSUN
        ${p2}`

}













// p1.onclick = ()=>{       
//   console.log(typeof(x));
//     if(Number(score1.textContent)<Number(x.value)){
//     score1.textContent++
//     if(Number(score1.textContent)===Number(x.value)){       
//         winner(playerOne,playerTwo)
//      }
// }
// }





// p2.onclick = ()=>{
    
//  console.log(Number(x.value));
    
     if(Number(score2.textContent)<x.value){
     score2.textContent++
     if(Number(score2.textContent)===Number(x.value)){
       
    
        winner(playerTwo,playerOne)
     }
 }
   
//  }


 reset.addEventListener("click",()=>{
    score1.textContent="0"
    score2.textContent="0"
    x.value=""
    x.focus()
    p2.disabled=false
    p1.removeAttribute ("disabled")
    kazanan.style.display="none"

 })


