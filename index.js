const [workBtn, changeColorBtn] = document.querySelectorAll("button");
const navbar = document.querySelector(".navbar");
let iterationCount = 100000;

let reqIdle = window.requestIdleCallback;

//reqIdle((deadline) => {
//  if (deadline.timeRemaining() > 1) {
//    console.log("insideFunc");
//  }
//  console.log(deadline.timeRemaining());
//});

const expensiveCalculation = (deadline) => {
  //console.log(deadline);
  while (iterationCount > 0 && deadline.timeRemaining() > 1) {
    console.log(iterationCount);

    iterationCount--;
  }
  reqIdle(expensiveCalculation);
};

workBtn.addEventListener("click", () => reqIdle(expensiveCalculation));

changeColorBtn.addEventListener(
  "click",
  () => (navbar.style.backgroundColor = "green")
);
