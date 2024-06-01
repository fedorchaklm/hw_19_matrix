function makeMatrix() {
  let num = +prompt("Ведіть довжину масиву більше 1.", "2");
  while (isNaN(num) || num <= 1) {
    num = +prompt("Ведіть коректно довжину масиву більше 1!", "2");
  }
  let cornerElementTopRigth = +prompt(
    "Ведіть кутовий елемент квадрата верх праворуч від 0 до 9",
    "1"
  );
  while (
    isNaN(cornerElementTopRigth) ||
    cornerElementTopRigth < 0 ||
    cornerElementTopRigth >= 10
  ) {
    cornerElementTopRigth = +prompt(
      "Ведіть коректно кутовий елемент квадрата верх праворуч від 0 до 9 !",
      "1"
    );
  }
  const matrix = [];
  for (let i = 0; i < num; i++) {
    const arr = [];
    for (let j = 0; j < num; j++) {
      const value = Math.round(Math.random() * 9);
      if (i === 0 && j === num - 1) {
        arr[num - 1] = cornerElementTopRigth;
        continue;
      }
      arr.push(value);
    }
    matrix.push(arr);
  }
  return matrix;
}

let matrix = makeMatrix();

function sumMainDiagonal(matrix) {
  return matrix.reduce((sum, row, i) => {
    row.forEach((item, j) => {
      if (i === j) {
        sum += item;
      }
    });
    return sum;
  }, 0);
}

function sumSideDiagonal(matrix) {
  return matrix.reduce((sum, row, i) => {
    row.forEach((item, j) => {
      if (i === matrix.length - 1 - j) {
        sum += item;
      }
    });
    return sum;
  }, 0);
}

function sumTopRight(matrix) {
  return matrix.reduce((sum, row, i) => {
    row.forEach((item, j) => {
      if (j >= i) {
        sum += item;
      }
    });
    return sum;
  }, 0);
}

function sumMainTopRight(matrix) {
  return matrix.reduce((sum, row, i) => {
    row.forEach((item, j) => {
      if (j >= i) {
        sum += item;
      }
    });
    return sum;
  }, 0);
}

function sumMainBottomLeft(matrix) {
  return matrix.reduce((sum, row, i) => {
    row.forEach((item, j) => {
      if (j <= i) {
        sum += item;
      }
    });
    return sum;
  }, 0);
}

function sumSideTopLeft(matrix) {
  return matrix.reduce((sum, row, i) => {
    row.forEach((item, j) => {
      if (i <= matrix.length - 1 - j) {
        sum += item;
      }
    });
    return sum;
  }, 0);
}

function sumBottomRight(matrix) {
  return matrix.reduce((sum, row, i) => {
    row.forEach((item, j) => {
      if (i >= matrix.length - 1 - j) {
        sum += item;
      }
    });
    return sum;
  }, 0);
}

function sumRow(matrix, row) {
  return matrix[row - 1].reduce((sum, item) => {
    sum += item;
    return sum;
  }, 0);
}

function sumColumn(matrix, column) {
  return matrix.reduce((sum, item) => {
    sum += item[column - 1];
    return sum;
  }, 0);
}

function printMatrix(matrix) {
  const container = document.getElementById("matrix");
  container.innerHTML = matrix.reduce((acc, row) => {
    acc += '<div class="matrix__row">';
    row.forEach((el) => {
      acc += `<div class="matrix__item">${el}</div>`;
    });
    return acc + "</div>";
  }, "");
}

printMatrix(matrix);

const container = document.getElementById("matrix");
const btns = document.querySelectorAll(".buttons__item");
const output = document.getElementById("output");
const btnSumMainDiagonal = document.getElementById("btnSumMainDiagonal");
const btnSumSideDiagonal = document.getElementById("btnSumSideDiagonal");
const btnSumTopRight = document.getElementById("btnSumTopRight");
const btnSumMainTopRight = document.getElementById("btnSumMainTopRight");
const btnSumMainBottomLeft = document.getElementById("btnSumMainBottomLeft");
const btnSumTopLeft = document.getElementById("btnSumTopLeft");
const btnSumSideTopLeft = document.getElementById("btnSumSideTopLeft");
const btnSumBottomRight = document.getElementById("btnSumBottomRight");
const btnSumRow = document.getElementById("btnSumRow");
const btnSumColumn = document.getElementById("btnSumColumn");
const btnMakeMatrix = document.getElementById("btnMakeMatrix");

function clearActive() {
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      item.classList.remove("active");
    });
    btns.forEach((item) => {
      item.classList.remove("active");
    });
  });
}

btnSumMainDiagonal.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (i === j) {
        item.classList.add("active");
      }
    });
  });
  btnSumMainDiagonal.classList.add("active");
  output.innerHTML = sumMainDiagonal(matrix);
});

btnSumSideDiagonal.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (i === matrix.length - 1 - j) {
        item.classList.add("active");
      }
    });
  });
  btnSumSideDiagonal.classList.add("active");
  output.innerHTML = sumSideDiagonal(matrix);
});

btnSumTopRight.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (i == j) {
        return;
      }
      if (j >= i) {
        item.classList.add("active");
      }
    });
  });
  btnSumTopRight.classList.add("active");
  output.innerHTML = `${sumTopRight(matrix) - sumMainDiagonal(matrix)}`;
});

btnSumMainTopRight.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (j >= i) {
        item.classList.add("active");
      }
    });
  });
  btnSumMainTopRight.classList.add("active");
  output.innerHTML = sumMainTopRight(matrix);
});

btnSumMainBottomLeft.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (j <= i) {
        item.classList.add("active");
      }
    });
  });
  btnSumMainBottomLeft.classList.add("active");
  output.innerHTML = sumMainBottomLeft(matrix);
});

btnSumTopLeft.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (i === matrix.length - 1 - j) {
        return;
      }
      if (i <= matrix.length - 1 - j) {
        item.classList.add("active");
      }
    });
  });
  btnSumTopLeft.classList.add("active");
  output.innerHTML = `${sumSideTopLeft(matrix) - sumSideDiagonal(matrix)}`;
});

btnSumSideTopLeft.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (i <= matrix.length - 1 - j) {
        item.classList.add("active");
      }
    });
  });
  btnSumSideTopLeft.classList.add("active");
  output.innerHTML = sumSideTopLeft(matrix);
});

btnSumBottomRight.addEventListener("click", () => {
  clearActive();
  container.childNodes.forEach((row, i) => {
    row.childNodes.forEach((item, j) => {
      if (i === matrix.length - 1 - j) {
        return;
      }
      if (i >= matrix.length - 1 - j) {
        item.classList.add("active");
      }
    });
  });
  btnSumBottomRight.classList.add("active");
  output.innerHTML = `${sumBottomRight(matrix) - sumSideDiagonal(matrix)}`;
});

btnSumRow.addEventListener("click", () => {
  clearActive();
  let row = +prompt(
    `Введіть номер рядка для підрахунку суми від 1 до ${matrix.length}`,
    "1"
  );
  while (isNaN(row) || row == 0 || row > matrix.length) {
    row = +prompt(
      `Введіть коректно номер рядка для підрахунку суми від 1 до ${matrix.length}`,
      "1"
    );
  }
  container.childNodes[row - 1].childNodes.forEach((item) => {
    item.classList.add("active");
  });
  btnSumRow.classList.add("active");
  output.innerHTML = sumRow(matrix, row);
});

btnSumColumn.addEventListener("click", () => {
  clearActive();
  let column = +prompt(
    `Введіть номер стовпця для підрахунку суми від 1 до ${matrix.length}`,
    "1"
  );
  while (isNaN(column) || column == 0 || column > matrix.length) {
    column = +prompt(
      `Введіть коректно номер стовпця для підрахунку суми від 1 до ${matrix.length}`,
      "1"
    );
  }
  container.childNodes.forEach((row, i) => {
    row.childNodes[column - 1].classList.add("active");
  });
  btnSumColumn.classList.add("active");
  output.innerHTML = sumColumn(matrix, column);
});

btnMakeMatrix.addEventListener("click", () => {
  clearActive();
  matrix = makeMatrix();
  printMatrix(matrix);
  output.innerHTML = '?';
});
