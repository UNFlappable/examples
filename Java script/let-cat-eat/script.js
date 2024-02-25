const catGif = document.querySelector("#catGif");
const running = catGif.style.animationPlayState === "running";

const name3 = "harun";
const nameArray = [...name3];


const click = (document.querySelector("#btn").onclick = () => {
  const running = catGif.style.animationPlayState === "running";
  catGif.style.animationPlayState = running ? "paused" : "running";
  const input = document.querySelector("#input").value;
  nameArray.forEach((e) => {

    if(e==input){
        document.querySelector("#p").textContent=input
    }
    // console.log(typeof(e));
    // console.log(input);
  });



});


