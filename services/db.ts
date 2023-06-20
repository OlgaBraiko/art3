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

const getResource = async (
  url: string = "https://simple-server-cumz.onrender.com/api/data"
) => {
  const result = await fetch(
    "https://simple-server-cumz.onrender.com/api/data"
  );

  if (!result.ok) {
    throw new Error(`could not fetch ${url},status:${result.status}`);
  }

  return await result.json();
};

export { postData, getResource };
