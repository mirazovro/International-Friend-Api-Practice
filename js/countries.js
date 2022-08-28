const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }

  const countryContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    // console.log(country);
    const countryDIv = document.createElement("div");
    countryDIv.classList.add("countryColor");
    countryDIv.innerHTML = `
      <h2>Countries:${country.area}</h2>
      <h2>Countries Name:${country.name.common}</h2>
      <h2>Capital:${country.capital ? country.capital[0] : "no capital"}</h2>
      <h2>Borders:${
        country.borders ? country.borders[0] : "Not any borders"
      }</h2>
      `;
    countryContainer.appendChild(countryDIv);
  });
};
loadCountries();
