function RollDice() {
  setTimeout(() => {
    const rondomNuber1 = Math.floor(Math.random() * 6 + 1);
    const rondomNuber2 = Math.floor(Math.random() * 6 + 1);

    document
      .querySelector(".img1")
      .setAttribute("src", "./images/dice" + rondomNuber1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./images/dice" + rondomNuber2 + ".png");

    if (rondomNuber1 > rondomNuber2) {
      document.querySelector(".result").innerHTML = "🚩 player 1 WIN";
    } else if (rondomNuber1 < rondomNuber2) {
      document.querySelector(".result").innerHTML = "🚩 player 2 WIN";
    } else {
      document.querySelector(".result").innerHTML = "DRAW";
    }
  }, 1500);
}

RollDice();
