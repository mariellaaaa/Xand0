  function reload() {
    window.location.reload();
  }

  function circleWon() {
    hide();
    document.getElementById('outputtext').innerHTML = "The Circle WON";
  }

  function crossWon() {
    hide();
    document.getElementById('outputtext').innerHTML = "The Cross WON";
  }

  function gameOver() {
    hide();
    document.getElementById('outputtext').innerHTML = "Game Over";
  }

  function hide() {
    let div = document.getElementById('matrix');
    div.style.display = 'none';
  }

  let counter = 0;
  let matrix = [];
  for(let i = 0; i < 3; i++) {
    matrix[i] = new Array(3);
  }
  let line;
  let column;

  function displayValue(x) {
    ++counter;
    if (x <= 3) {
      line = 0;
      column = x - 1;
    } else if (x > 3 && x <= 6) {
      line = 1;
      column = x - 4;

    } else if (x > 6) {
      line = 2;
      column = x - 7;
    }
    if (counter % 2 == 0) {
      document.getElementById(x).innerHTML = "X";
      matrix[line][column] = -1;
      checkTheWinner();
    } else if (counter % 2 != 0) {
      document.getElementById(x).innerHTML = "0";
      matrix[line][column] = 1;
      checkTheWinner();
    }
  }

  function checkTheWinner() {
    for(let i = 0; i < 3; i++) {
      let lineSum = 0;
      for(let j = 0; j < 3; j++) {
          lineSum += matrix[i][j];
      }
      if(lineSum == 3) {
        circleWon();
      } else if(lineSum == -3) {
        crossWon();
      }
    }
    for(let i = 0; i < 3; i++) {
        let columnSum = 0;
        for(let j = 0; j <3; j++) {
            columnSum += matrix[j][i];
        }
        if(columnSum == 3) {
          circleWon();
        } else if(columnSum == -3) {
          crossWon();
        }
    }
    if(matrix[0][0] + matrix[1][1] + matrix[2][2] == 3) {
      circleWon();
    } else if(matrix[0][0] + matrix[1][1] + matrix[2][2] == -3) {
      crossWon();
    }
    if(matrix[2][0] + matrix[1][1] + matrix[0][2] == 3) {
      circleWon();
    } else if(matrix[2][0] + matrix[1][1] + matrix[0][2] == -3) {
      crossWon();
    }
    if (counter == 9) {
      gameOver();
    }
  }
