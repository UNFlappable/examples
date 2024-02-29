const catGif = document.querySelector("#catGif");
const duranCat=document.querySelector("#catDuran")
let catRunning = catGif.style.animationPlayState 
let duranCatPosition=0
let animationName=1
const btn2=document.querySelector("#btn2")

const kedifunc = ()=>{
  duranCat.style.display="none"
  if (catRunning !== "running") {
    catGif.style.animationPlayState = "running";}
  
  setTimeout(()=>{
    duranCatPosition+=15
    animationName+=1
    
    duranCat.style.display="inline"
    duranCat.style.left=`${duranCatPosition}vw`

    
    catGif.style.animationName=`move${animationName}`
    if (catRunning !== "running") {
        catGif.style.animationPlayState = "paused";}
  

  },2000)
}


btn2.addEventListener("click",()=>{
   
 kedifunc()
  
})