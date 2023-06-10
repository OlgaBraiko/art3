const filter = (): void => {
  const menu: HTMLElement = document.querySelector(".portfolio-menu")!;
  const items: NodeListOf<HTMLElement> = menu.querySelectorAll("li");
  const btnAll: HTMLElement = menu.querySelector(".all")!;
  const btnLovers: HTMLElement = menu.querySelector(".lovers")!;
  const btnChef: HTMLElement = menu.querySelector(".chef")!;
  const btnGirl: HTMLElement = menu.querySelector(".girl")!;
  const btnGuy: HTMLElement = menu.querySelector(".guy")!;
  const btnGrandmother: HTMLElement = menu.querySelector(".grandmother")!;
  const btnGranddad: HTMLElement = menu.querySelector(".granddad")!;
  const wrapper: HTMLElement = document.querySelector("portfolio-wrapper")!;
  const markAll: NodeListOf<HTMLElement> = document.querySelectorAll(".all");
  const markGirl: NodeListOf<HTMLElement> = document.querySelectorAll(".girl");
  const markLovers: NodeListOf<HTMLElement> =
    document.querySelectorAll(".lovers");
  const markChef: NodeListOf<HTMLElement> = document.querySelectorAll(".chef");
  const markGuy: NodeListOf<HTMLElement> = document.querySelectorAll(".guy");
  const no: HTMLElement = document.querySelector(".portfolio-no")!;

  const typeFilter = (markType: NodeListOf<HTMLElement>) => {
    markAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  btnAll?.addEventListener("click", () => {
    typeFilter(markAll);
  });
  btnLovers?.addEventListener("click", () => {
    typeFilter(markLovers);
  });
  btnChef?.addEventListener("click", () => {
    typeFilter(markChef);
  });
  btnGirl?.addEventListener("click", () => {
    typeFilter(markGirl);
  });
  btnGuy?.addEventListener("click", () => {
    typeFilter(markGuy);
  });
  btnGrandmother?.addEventListener("click", () => {
    //typeFilter();
  });
  btnGranddad?.addEventListener("click", () => {
    //typeFilter() ;
  });

  menu.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target && target.tagName === "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};

export default filter;
