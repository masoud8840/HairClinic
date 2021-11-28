MenuToggle = () => {
  let menuBtn = document.querySelector("#menu-toggler");
  let menu = document.querySelector(".responsive-menu");
  let isOpen = false;

  menu.addEventListener("click", (event) => {
    if (event.srcElement.classList == "menu-inner") {
      isOpen = false;
      menu.style.bottom = "-50%";
    }
  });
  menuBtn.addEventListener("click", () => {
    console.log(isOpen);
    if (isOpen) {
      isOpen = false;
      menu.style.bottom = "-50%";
    } else {
      isOpen = true;
      menu.style.bottom = "0px";
    }
  });
};

// Toggle responsive menu's dropdown
DropdownToggle = () => {
  let menuContainer = document.querySelector(".responsive-menu");
  let isOpen = false;
  let dropdownArrow = document.querySelector("#dropdown-arrow");
  let dropdownBtn = document.querySelector(".dropdown-item");
  let dropdown = document.querySelector(".dropdown");

  dropdownBtn.addEventListener("click", (event) => {
    if (!isOpen) {
      isOpen = true;
      dropdownArrow.className = "fas fa-angle-up";
      dropdown.style.height = "initial";
    } else {
      isOpen = false;
      dropdownArrow.className = "fas fa-angle-down";
      dropdown.style.height = "0";
    }
  });
};

MenuToggle();
DropdownToggle();
