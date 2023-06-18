const drop = () => {
  const fileInputs: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('[name="upload"');

  ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName): void => {
    fileInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(
    e: DragEvent | MouseEvent | UIEvent | Event | AnimationEvent
  ) {
    e.preventDefault();
    e.stopPropagation();
  }

  const highlight = (item: any): void => {
    item.closest(".file_upload").style.border = "5px solid grey";
    item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0,0.3)";
  };

  const unhighlight = (item: any) => {
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

  fileInputs.forEach((input: HTMLInputElement): void => {
    input.addEventListener("drop", (ev) => {
      const target: HTMLInputElement = ev.target as HTMLInputElement;

      let files: FileList = <FileList>target.files;

      const [fileName, fileExt] = files[0].name.split(".");

      const dots: string = fileName.length > 6 ? "..." : ".";

      const name: string = `${fileName.substring(0, 6)} ${dots} ${fileExt}`;

      (<HTMLElement>input.previousElementSibling).textContent = name;

      files = (<DataTransfer>(<DragEvent>ev).dataTransfer).files;
    });
  });
};

export default drop;
