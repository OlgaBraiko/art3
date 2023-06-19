//import { HtmlTagDescriptor } from "vite";

const accordion = (trrigers: string) => {
  const btns: NodeListOf<HTMLElement> = document.querySelectorAll(trrigers);

  btns.forEach((btn) => {
    btn.addEventListener("click", (e): void => {
      const target = e.currentTarget as HTMLElement;
      target.classList.toggle("active-style");
      target.nextElementSibling?.classList.toggle("active-content");

      const nextElementSibling: HTMLElement | null =
        target.nextElementSibling as HTMLElement;
      console.log(target, nextElementSibling);
 
 
      if (nextElementSibling?.classList.contains("active-content")) {
 
 
        nextElementSibling.style.maxHeight =
          nextElementSibling?.scrollHeight + 80 + "px";
      } else {
        nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};

export default accordion;
