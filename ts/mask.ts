const mask = (selector: string) => {
  const setCursorPosition = (pos: string, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  const createMask = (e) => {
    const target = e.target as HTMLElement;
    let matrix = "+7 (___) ___ __ __";
    let i = 0;
    const def = matrix.replace(/\D/g, "");
    let val = target.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    target.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (e.type === "blur") {
      if (target.value.length === 2) {
        target.value = "";
      } else {
        setCursorPosition(target.value.length, this);
      }
    }
  };

  const inputs: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};

export default mask;
