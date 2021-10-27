rotateSlider = () => {
  let sliderThumb = document.querySelector(".background-overlay input");
  sliderThumb.addEventListener("input", () => {
    let sliderValue = sliderThumb.value;
    if (sliderValue > 35) {
      sliderThumb.style.transform = "rotateZ(0)";
      sliderThumb.style.top = "-15px";
      sliderThumb.style.left = "0";
    } else if (sliderValue < 30 && sliderValue > 25) {
      sliderThumb.style.transform = "rotateZ(10deg)";
      sliderThumb.style.top = "-12px";
    } else if (sliderValue < 25 && sliderValue > 20) {
      sliderThumb.style.transform = "rotateZ(20deg)";
      sliderThumb.style.top = "-7px";
    } else if (sliderValue < 20 && sliderValue > 15) {
      sliderThumb.style.transform = "rotateZ(30deg)";
      sliderThumb.style.top = "-7px";
    } else if (sliderValue < 15 && sliderValue > 10) {
      sliderThumb.style.transform = "rotateZ(50deg)";
      sliderThumb.style.top = "0px";
    } else if (sliderValue < 10 && sliderValue > 7) {
      sliderThumb.style.transform = "rotateZ(70)";
      sliderThumb.style.top = "5px";
    } else if (sliderValue < 7 && sliderValue > 5) {
      sliderThumb.style.transform = "rotateZ(90deg)";
      sliderThumb.style.top = "5px";
    } else if (sliderValue < 5 && sliderValue > 3) {
      sliderThumb.style.transform = "rotateZ(100deg)";
      sliderThumb.style.top = "5px";
      sliderThumb.style.left = "0px";
    } else if (sliderValue < 3 && sliderValue > 1) {
      sliderThumb.style.transform = "rotateZ(110deg)";
      sliderThumb.style.top = "45px";
      sliderThumb.style.left = "-5px";
    } else if (sliderValue == 0) {
      sliderThumb.style.transform = "rotateZ(110deg)";
      sliderThumb.style.top = "50px";
      sliderThumb.style.left = "-8px";
      setTimeout(ChangeBackgroundImage, 1000);
    }
  });
};
let bgIndex = 0;

ChangeBackgroundImage = () => {
  let bgLists = [
    "/public/image/IndexBackground_Edition.jpg",
    "/public/image/background_02.jpg",
    "/public/image/background_03.png",
  ];
  document.body.style.background = `#272f44 url('${bgLists[bgIndex]}') center/contain no-repeat`;

  bgIndex++;
  if (bgIndex > bgLists.length - 1) {
    bgIndex = 0;
  }
};
rotateSlider();
