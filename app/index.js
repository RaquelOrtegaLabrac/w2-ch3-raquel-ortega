let myNumber = 0;
const getNumber = document.getElementById("number");
// GetNumber.innerHTML = myNumber;
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const restartButton = document.getElementById("restart");

const addOne = () => {
  if (myNumber < 10) {
    myNumber++;
    getNumber.innerHTML = myNumber;
  }
};

export const addCustomOne = (myNumber) => {
  if (myNumber < 10) {
    return ++myNumber;
  }
};

const substractOne = () => {
  if (myNumber > 0) {
    myNumber--;
    getNumber.innerHTML = myNumber;
  }
};

const resetCounter = () => {
  myNumber = 0;
  getNumber.innerHTML = myNumber;
};

// IncrementButton.addEventListener("click", addOne);
// decrementButton.addEventListener("click", substractOne);
// restartButton.addEventListener("click", resetCounter);

export default {
  addOne,
  addCustomOne,
  substractOne,
  resetCounter,
};
