const catGif = document.querySelector("#catGif");
const duranCat=document.querySelector("#catDuran")
// const running = catGif.style.animationPlayState === "running";

const name3 = "harun";
const nameArray = [...name3];


const click = (document.querySelector("#btn").onclick = () => {
  const running = catGif.style.animationPlayState === "running";
  catGif.style.animationPlayState = running ? "paused" : "running";
  const input = document.querySelector("#input").value;
  duranCat.style.display="none"
  setTimeout(()=>{
    let x=0
    x+=300
    duranCat.style.display="inline"
    duranCat.style.left=`${x}px`
  },2000)


  nameArray.forEach((e) => {

    if(e==input){
        document.querySelector("#p").textContent=input
    }
    // console.log(typeof(e));
    // console.log(input);
  });



});

const anima= document.querySelector("#btn2")

anima.addEventListener("click",()=>{
  const running = catGif.style.animationPlayState === "running";
  catGif.style.animationPlayState = running ? "paused" : "running";
  const input = document.querySelector("#input").value;
  duranCat.style.display="none"
  setTimeout(()=>{
    let x=0
    x+=300
    duranCat.style.display="inline"
    duranCat.style.left=`${x}px`
  },2000)
  catGif.style.animationName="move2"
anima.click()
})

