const showMoreStyles = (trigger: any, styles: string) => {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll(styles);
  const btn: HTMLElement = document.querySelector(trigger);

  cards.forEach((card: HTMLElement): void => {
    card.classList.add("animated", "fadeInUp");
  });

  btn.addEventListener("click", (): void => {
    cards.forEach((card: HTMLElement) => {
      card.classList.add(
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
      card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
    });
    btn.style.display = "none";
  });
};
export default showMoreStyles;
