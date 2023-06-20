import { getResource } from "../services/db";

const showMoreStyles = (trigger: string, wrapper: string) => {
  const btn: HTMLInputElement | null = document.querySelector(trigger);

  // cards.forEach((card: HTMLElement): void => {
  //card.classList.add("animated", "fadeInUp");
  // });

  //btn.addEventListener("click", (): void => {
  //cards.forEach((card: HTMLElement) => {
  //card.classList.add(
  // "col-sm-3",
  //"col-sm-offset-0",
  //"col-xs-10",
  //"col-xs-offset-1"
  // );
  // card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //  });
  //  btn.style.display = "none";
  // });

  btn?.addEventListener("click", function (): void {
    getResource("http://localhost:5173/")
      .then((res) => createCards(res))
      .catch((error) => console.log(error));

    this.remove();
  });

  const createCards = (response) => {
    response.forEach((res) => {
      let card = document.createElement("div");
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );

      card.innerHTML = `
<div class='styles-block'>
  	<img src= ${res.src} alt='style'>
  	<h4>${res.title}</h4>
  <a href="${res.link}">Подробнее</a>
  </div>
`;

      document.querySelector(wrapper)?.appendChild(card);
    });
  };
};

export default showMoreStyles;
