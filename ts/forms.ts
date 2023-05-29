const form = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
   spiner:'',
    ok:,
    fail:
  };

  //const path={
    //designer:,
   // question: //путь
    
  //}

  const postData = async ('https://simple-server-cumz.onrender.com/api/data', data) => {
 
    console.log(data:Date);
    const result = await fetch('https://simple-server-cumz.onrender.com/api/data', {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: data,
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMesage = document.createElement("div");
      statusMesage.classList.add("status");
      form.parentNode. appendChild(statusMesage);

      form.classList.add('animated','fadeOutUp');
      setTimeout(()=>{
        form.style.display='none'
      },400);

      const statusImg=document.createElement('img');
      statusImg.setAttribute('src',message.spiner);
      statusImg.classList.add('animated','fadeInUp');
      statusMesage.appendChild(statusImg);

      const textMesage=document.createElement('div');
      textMesage.textContent=message.loading;
      statusMesage.appendChild(statusImg)

      const formData = new FormData(form);
      const api;
 
      form.closest('.popup-design')?api=path.designer:api=path.question;

      postData("https://simple-server-cumz.onrender.com/api/data",
      //вставить api и переместить ссылку
       json)
        .then((result) => {
          console.log({ result });
          statusImg.setAttribute('src',message.ok)
          textMesage.textContent = message.success;
        })
        .catch(() =>  {
            statusImg.setAttribute('src',message.fail)
            textMesage.textContent=message.failure
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMesage.remove();
          }, 6000);
        });
    });
  });
};

export default form;
