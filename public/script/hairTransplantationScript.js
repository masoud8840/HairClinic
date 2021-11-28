window.addEventListener("scroll", () => {
  let footerDisc = document.querySelector(".footer-desc");
  if (footerDisc.getBoundingClientRect().bottom < 1150) {
    footerDisc.style.opacity = "1";
    footerDisc.style.transform = "translateY(0)";
  }
  console.log(scrollY);
});
