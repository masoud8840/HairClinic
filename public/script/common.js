MenuToggle = () => {
  let menuBtn = document.querySelector("#menu-toggler");
  let menu = document.querySelector(".responsive-menu");
  let isOpen = false;
  menuBtn.addEventListener("click", () => {
    if (isOpen) {
      isOpen = false;
    } else {
      isOpen = true;
    }
    console.log(isOpen);
  });
};

MenuToggle();
