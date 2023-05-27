const slides = (sliders: string, dir: string, prev, next) => {
  let slideIndex = 1;

  let paused: any = false;

  const slides: NodeListOf<HTMLElement> = document.querySelectorAll(sliders);
  const prevBtn: HTMLElement = document.querySelector(prev);
  const nextBtn: HTMLElement = document.querySelector(next);

  const showSlides = (n: number) => {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide: HTMLElement) => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";
  };

  showSlides(slideIndex);

  const plusSlides = (n: number) => {
    showSlides((slideIndex += n));
  };

  try {
    const prevBtn: HTMLElement = document.querySelector(prev);
    const nextBtn: HTMLElement = document.querySelector(next);

    prevBtn.addEventListener("click", () => {
      plusSlides(-1);
      slides[slideIndex - 1].classList.remove("slideInLeft");
      slides[slideIndex - 1].classList.add("slideInRight");
    });

    nextBtn.addEventListener("click", () => {
      plusSlides(1);
      slides[slideIndex - 1].classList.add("slideInLeft");
      slides[slideIndex - 1].classList.remove("slideInRight");
    });
  } catch (e) {}

  const activateAnimation = (): void => {
    if (dir === "vertical") {
      paused = setInterval((): void => {
        plusSlides(1);
        slides[slideIndex - 1].classList.add("slideInDown");
      }, 2000);
    } else {
      paused = setInterval((): void => {
        plusSlides(1);
        slides[slideIndex - 1].classList.add("slideInLeft");
        slides[slideIndex - 1].classList.remove("slideInRight");
      }, 2000);
    }
  };

  if (dir === "vertical") {
    setInterval((): void => {
      plusSlides(1);
      slides[slideIndex - 1].classList.add("slideInDown");
    }, 2000);
  } else {
    setInterval((): void => {
      plusSlides(1);
      slides[slideIndex - 1].classList.add("slideInLeft");
      slides[slideIndex - 1].classList.remove("slideInRight");
    }, 2000);
  }

  /*slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });*/
};
export default slides;
