const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrossel(){
    idx++;

    if(idx> img.lenght - 1){
        idx = 0;
    }

img.style.transform = `translateX(${-idx * 920} px)`;
}

setInterval(carrossel, 1800);