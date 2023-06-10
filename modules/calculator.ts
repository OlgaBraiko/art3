const calc = ({
  sizes: size,
  materials: material,
  options: option,
  promocode: promocode,
  result: res,
}) => {
  const sizeBlock: HTMLInputElement = document.querySelector(size);
  const materialBlock: HTMLInputElement = document.querySelector(material);
  const optionsBlock: HTMLInputElement = document.querySelector(option);
  const promocodeBlock: HTMLElement = document.querySelector(promocode);
  const resultBlock: HTMLElement = document.querySelector(res);

  let sum: number = 0;

  const calcFunc = (): void => {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );

    if (sizeBlock.value === "" || materialBlock.value === "") {
      resultBlock.textContent = "Пожалуйста выберите размер и материал картины";
    } else if (promocode.value === "IWANTPOPART") {
      resultBlock.textContent = String(Math.round(sum * 0.7));
    } else {
      resultBlock.textContent = String(sum);
    }
  };

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};
export default calc;
