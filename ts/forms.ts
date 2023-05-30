const form = () => {
  const forms:NodeListOf<HTMLElement> = document.querySelectorAll("form");
  const inputs:NodeListOf<HTMLElement> = document.querySelectorAll("input");

  const message:{loading:string,
    success:string,
    failure:string,
    spiner:string,
    ok:string,
    fail:string} = {
    loading: "Загрузка...",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
  spiner:'image/unknown-1.png',
   ok:'image/unknown.jpeg',
fail:'image/unknown.png'  
  };

  forms.forEach((form)  => {
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
      let api:string ;
 
      form.closest('.popup-design')?api=path.designer:api=path.question;

      postData(api,json)
        .then((result:string) => {
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
            textMesage.remove();
          }, 6000);
        });
    });
  });

  const clearInputs = ():void => {
    inputs.forEach((input) => {
     input.value = "";
    });
};
};

  const path:{designer:string,
              question:string}={
     designer:'https://simple-server-cumz.onrender.com/api/data',
     question: 'https://simple-server-cumz.onrender.com/api/data' ,
    
   }

  const postData = async  ('https://simple-server-cumz.onrender.com/api/data',  data) => {
 
    console.log(data);
    const result = await fetch('https://simple-server-cumz.onrender.com/api/data', {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: data,
    });

    return await result.text();
    
    
  };




 

export default form;
