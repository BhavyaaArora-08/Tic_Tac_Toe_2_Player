var huPlayer;
var aiPlayer;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

const cells = document.querySelectorAll(".board td"); //all cells will be selected

var first = true;

function startGame() {

  if (first) {
    var chX = document.getElementById('rX').checked;
    var chO = document.getElementById('rO').checked;
    if (chX) {
      huPlayer = 'X';
      aiPlayer = 'O';
    } else {
      aiPlayer = 'X';
      huPlayer = 'O';
    }

    document.getElementById('choices').className = "startPage";
    document.getElementById('but').className = "startPage";
    play();
    first = false;
  } else {
    for (i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
    }
    // play();
  }

  return false;
}

function play() {
  var board = document.getElementById('board').className = "ok";
  var rep = document.getElementById('repb').className = "btn btn-danger oka";
}

function makeMove(ide) {
  var str = ide.id;
  if (elementIsEmpty(ide)) {
    if (huPlayer == 'X') {
      var text = document.createTextNode("X");
      ide.appendChild(text);
      if (checkWin(winCombos, huPlayer)) {
        startGame();
      }
      huPlayer = 'O';
    } else {
      var text = document.createTextNode("O");
      ide.appendChild(text);
      if (checkWin(winCombos, huPlayer)) {
        startGame();
      }
      huPlayer = 'X';
    }

  }
}

var winner = "";

function checkWin(arr, curPlayer) {
  arr.forEach(function(subArr) {
    var counter = 0;
    subArr.forEach(function(elem) {
      if (cells[elem].innerHTML === curPlayer) {
        counter++;
        if (counter == 3) {
          winner = curPlayer;
          alert(winner);
          startGame();
          return true;
        }
      }
    });
  });
}

function elementIsEmpty(el) {
  return (/^(\s|&nbsp;)*$/.test(el.innerHTML));
}


// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [6, 4, 2]

// const two = "2";
// const five = "5";
// const eight = "8";
// const zero = "0";
// const four = "4";
// var st2 = "258";
// var st1 = "048";
//
// function checkWon(cells) {
//   var str = "";
//   var i;
//   for (i = 0; i < cells.length; i++) {
//     if (cells[i].innerText == huPlayer)
//       str += i;
//   }
//
//   var stra = "";
//   for (i = 0; i < cells.length; i++) {
//     var text = cells[i].innerText;
//     if (text == huPlayer && (i == two || i == five || i == eight))
//       stra += i;
//   }
//
//   if (stra.localeCompare(st2) == 0)
//     return true;
//
//   stra = "";
//   for (i = 0; i < cells.length; i++) {
//     var text = cells[i].innerText;
//     if (text == huPlayer && (i == zero || i == four || i == eight))
//       stra += i;
//   }
//
//   if (stra.localeCompare("048") == 0)
//     return true;
//
//   if (str.includes("012", -1) || str.includes("345", -1) || str.includes("678", -1) || str.includes("036", -1) || str.includes("147", -1) || str.includes("258", -1) || str.includes("048", -1) || str.includes("246", -1))
//     return true;
//   else
//     return false;
//
// }
