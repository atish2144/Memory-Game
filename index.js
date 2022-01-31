let Col = document.getElementsByClassName("column");

let arr = ["image1.jpg", "image2.jpg", "image3.jpg"];
let A = document.getElementById("one");
let noOfTry = document.getElementById("noOfTry");
let Woncount = document.getElementById("wonc");
let count = 1;
let p = 0,
  q = 0;
let d = localStorage.getItem("lose");
let f = localStorage.getItem("won");
if (d) {
  p = d;
  localStorage.setItem("lose", p);
  noOfTry.innerText = "lose: " + p;
}

if (f) {
  q = f;
  localStorage.setItem("won", q);
  Woncount.innerText = "won: " + q;
}
let x;
let y;

function fun(val) {
  x = Math.floor(Math.random() * 3);

  Col[val].innerHTML = `<img src="${arr[x]}">`;
  if (count == 1) {
    y = x;
  }

  check();
  count++;
  //  alert(count);
}

function check() {
  if (count == 2) {
    if (x == y) {
      q++;
      localStorage.setItem("won", q);
      Woncount.innerText = " You won: " + q;
    } else {
      p++;
      noOfTry.innerText = "You lose :" + p;
      localStorage.setItem("lose", p);
    }
  }
  if (count == 3) {
    location.reload();
  }
}
