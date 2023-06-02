const form = () => {
  const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
  const inputs: NodeListOf<HTMLInputElement> =
    document.querySelectorAll("input");

  const message: {
    loading: string;
    success: string;
    failure: string;
    spinner: string;
    ok: string;
    fail: string;
  } = {
    loading: "Загрузка...",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "image/unknown-1.png",
    ok: "image/unknown.jpeg",
    fail: "image/unknown.png",
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form?.appendChild(statusMessage);

      form.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        form.style.display = "none";
      }, 400);

      const statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.appendChild(statusImg);

      const textMesage = document.createElement("div");
      textMesage.textContent = message.loading;
      statusMessage.appendChild(statusImg);

      const formData = new FormData(form);

      const api: string = form.closest(".popup-design")
        ? path.designer
        : path.question;

      const objDataForm = {};

      formData.forEach((value, key) => (objDataForm[key] = value));
      const json = JSON.stringify(objDataForm);

      postData(api, json)
        .then((result: string) => {
          console.log({ result });
          statusImg.setAttribute("src", message.ok);
          textMesage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute("src", message.fail);
          textMesage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = "block";
            form.classList.remove("fadeOutUp");
            form.classList.add("fadeInUp");
          }, 5000);
        });
    });
  });

  const clearInputs = (): void => {
    inputs.forEach((input) => {
      input.value = "";
    });
  };
};
const path: { designer: string; question: string } = {
  designer: "https://simple-server-cumz.onrender.com/api/data",
  question: "https://simple-server-cumz.onrender.com/api/data",
};

const postData = async (
  url: string = "https://simple-server-cumz.onrender.com/api/data",
  data: string
) => {
  console.log(data);
  const result = await fetch(
    "https://simple-server-cumz.onrender.com/api/data",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    }
  );

  return await result.text();
};

export default form;
