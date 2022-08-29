const loadQutes = () => {
  fetch("");
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => loadData(data));
};

const loadData = (loadedData) => {
  //   console.log(loadedData);
  const blockQutes = document.getElementById("quote");
  blockQutes.innerText = loadedData.quote;
};


loadQutes();
