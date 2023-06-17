const drop = () => {
  const fileInputs: NodeListOf<HTMLElement> =
    document.querySelectorAll('[name="upload"');

  ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName): void => {
    fileInputs.forEach((input: HTMLElement) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(
    e: DragEvent | MouseEvent | UIEvent | Event | AnimationEvent
  ) {
    e.preventDefault();
    e.stopPropagation();
  }

  const highlight = (item): void => {
    item.closest(".file_upload").style.border = "5px solid grey";
    item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0,0.3)";
  };

  const unhighlight = (item) => {
    item.closest(".file_upload").style.border = "none";

    if (item.closest(".calc_form")) {
      item.closest(".file_upload").style.backgroundColor = "#fff";
    } else {
      item.closest(".file_upload").style.backgroundColor = "#ededed";
    }
  };

  ["dragenter", "dragover"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener("drop", (e: DragEvent) => {
      const inputFile: FileList | undefined = e.dataTransfer?.files;

      let dots;
      const arr = input[0].name.split(".");
      const name = arr[0].substring(0, 6) + dots(".");
      //input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;
