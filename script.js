let gameSeq = [];
let userSeq = [];
let highestScore = document.querySelector("#highest");
let score = 0;
let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game Started.");
        started = true;
    }
    levelUp();
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
}
function levelUp() {
    userSeq = [];
    level++;
    if(level >= score)
        score = level;
    h2.innerText = `level ${level}`;
    highestScore.innerText = `Highest Score : ${score}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randBtn);
    btnFlash(randBtn);
}

function chechAns(idx) {
    // console.log("curr level : ", level);
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp, 2000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    chechAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}