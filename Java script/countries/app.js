//  Selectors
const select = document.querySelector(".form-select")
const img = document.querySelector(".card-img-top")
const title = document.querySelector(".card-title")
const listGroup = document.querySelector(".list-group")
const mapLink = document.querySelector(".card-link")
const countryFunc = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3/all");
      // console.log(res);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      const data = await res.json();
      // console.log(data);
      countriesList(data);
    } catch (error) {
      console.log(error);
    }
  };