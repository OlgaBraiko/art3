const pictureSize = (imgSelector: string) => {
  const blocks: NodeListOf<HTMLElement> =
    document.querySelectorAll(imgSelector);

  const showImg = (block): void => {
    const img: HTMLImageElement = block.querySelector("img");
    //something.png => something-1.png
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach((p: HTMLElement) => {
      p.style.display = "none"; //Замена картинки при наведении
    });
  };

  const hideImg = (block) => {
    const img: HTMLImageElement = block.querySelector("img");
    //something-1.png => something.png
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach((p: HTMLElement) => {
      p.style.display = "block"; //картинка скрывается и возвращается заглушка
    });
  };

  blocks?.forEach((block): void => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};

export default pictureSize;
