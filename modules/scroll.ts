const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener("scroll", (): void => {
    const BREAKPOINT: number = 1650;
    if (document.documentElement.scrollTop > BREAKPOINT) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("animated", "fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  const element = document.documentElement;
  const body = document.body;

  const calcScroll = () => {
    upElem.addEventListener("click", (e: Event): void => {
      const target: any = e.target as HTMLElement;
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (target.hash !== "") {
        e.preventDefault();
        let hashElem: any = document.querySelector(target.hash);
        let hashElemTop = 0;

        while (hashElem?.offsetParent) {
          hashElemTop += hashElem.offsetTop;
          hashElem = hashElem.offsetParent;
        }

        hashElemTop = Math.round(hashElemTop);

        smoothScroll(scrollTop, hashElemTop, target.hash);
      }
    });
  };

  const smoothScroll = (from: number, to: number, hash: string) => {
    let timeInterval: number = 1;
    let prevScrollTop: number;
    let speed: number;

    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }

    let move = setInterval((): void => {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (
        prevScrollTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, "")
        ) + hash;
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };
  calcScroll();
};
export default scrolling;
