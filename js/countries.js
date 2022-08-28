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
      <button onClick="loadCountryDetail('${country.cca2}')"> Details</button>

      `;
    countryContainer.appendChild(countryDIv);
  });
};

const loadCountryDetail = (code) => {
  //https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  //   console.log("get country details", code);
  fetch(url)
    .then((res) => res.json())
    .then((Data) => displyCountryDetail(Data[0]));
};

const displyCountryDetail = (country) => {
  //   console.log(country);

  const CountryDetail = document.getElementById("country-details");
  CountryDetail.innerHTML = `
    <h2>Name:${country.name.common}</h2>
    <img src="${country.flags.png}"></img>
    `;
};

loadCountries();
