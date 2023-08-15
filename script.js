let hitrn ;
let score = 0;

function increseScore(){
    score += 10;
    document.querySelector("#score").textContent = score
}

function newHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;  
}
newHit();

function makeBubble(){
    let clutter = '';
    for(let i=1;i<=147;i++){
        let rn = Math.floor(Math.random()*10)
        clutter += ` <div class="circle">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

let time = 60;

function runTimer() {
    
let timeint =  setInterval(() => {
        if(time>0){
            time--;
            document.querySelector('#timer').textContent = time;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<div class = "ending"><h1>GAME OVER</h1> <h2>YOUR SCORE : ${score}</h2></div>`
        }

    },1000);
}
runTimer();

document.querySelector("#pbtm").addEventListener("click", (dets)=>{

    let clicknum = Number(dets.target.textContent);

    if(clicknum===hitrn){
        increseScore();
        makeBubble();
        newHit();
    }

    
});













