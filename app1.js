let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// 1
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelup();
  }
});

// 3
function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

// 2
function levelup() {
  userseq = [];
  level++;

  h2.innerText = `Level ${level}`;

  // 4
  let randidx = Math.floor(Math.random() * 3);
  //   console.log(randidx);
  let randcolor = btns[randidx];
  let randbtn = document.querySelector(`.${randcolor}`);

  // console.log(randidx);
  // console.log(randcolor);
  // console.log(randbtn);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameflash(randbtn);
}

function checkans(idx) {
  // console.log(`current level : ${level}`);

  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over ! Your Score was  <b> ( ${level} ) </b>  <br>  Press any key to start .`;
    let gameovercolor = document.querySelector("body");
    gameovercolor.style.backgroundColor = "red";

    setTimeout(function () {
      gameovercolor.style.backgroundColor = "white";
    }, 250);

    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");

  userseq.push(usercolor);

  checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
