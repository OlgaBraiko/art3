const burger = (menuSelector, burgerSelector) => {
  const menuElem: HTMLObjectElement | HTMLElement =
    document.querySelector(menuSelector);
  const burgerElem: HTMLObjectElement | HTMLElement =
    document.querySelector(burgerSelector);

  menuElem.style.display = "none";

  burgerElem?.addEventListener("click", () => {
    if (
      String((menuElem.style.display = "none")) &&
      window.screen.availWidth < 993
    ) {
      menuElem.style.display = "block";
    } else {
      menuElem.style.display = "none";
    }
  });
};

export default burger;
