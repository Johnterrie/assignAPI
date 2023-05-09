const container = document.querySelector("body");

let num = 1;
let vehNum = 6;

container.innerHTML = `
<h1 class="loading">Loading....</h1>
<div class="main-container">
    <h1 class="main-heading">STARWARS WORLD</h1>
    <ul class="nav-ul-list">
        <li class="navish" onclick="peopleName(num)" >People</li>
        <li class="navish" onclick="planetName(num)">Planets</li>
        <li class="navish" onclick="filmName(num)">Films</li>
        <li class="navish" onclick="speciesName(num)">Species</li>
        <li class="navish" onclick="vehiclesName(vehNum)">Vehicles</li>
        <li class="navish" onclick="starshipName(5)">Starship</li>
    </ul>
`;

const subCont = document.createElement("div");
const nextBtn = document.createElement("div");
subCont.classList.add("sub-container");
nextBtn.classList.add("btn-div");

async function peopleName(number) {
  const APIdata = await fetch("https://swapi.dev/api/people/" + number);
  const data = await APIdata.json();
  const resData = data;

  console.log(resData);

  subCont.innerHTML = `
    <div class="sub-container">
        <ul class="ul-grid-one">
            <li>NAME: <a class="input" href="">${resData.name}</a></li>
            <li>HEIGHT: <a class="input" href="">${resData.height}</a></li>
            <li>MASS: <a class="input" href="">${resData.mass}</a></li>
            <li>HAIR COLOR: <a class="input" href="">${resData.hair_color}</a></li>
            <li>SKIN COLOR: <a class="input" href="">${resData.skin_color}</a></li>
            <li>EYE_COLOR: <a class="input" href="">${resData.eye_color}</a></li>
            <li>BIRTH_YEAR: <a class="input" href="">${resData.birth_year}</a></li>
        </ul>
    </div>

    <div class="btn-div">
                <button onclick="peopleName(num--)"class="btn">Previous</button>
                <button onclick="peopleName(num++)" class="btn">Next</button>
        </div>

    
    `;
  document.body.appendChild(subCont);
}

async function planetName(number) {
  const APIdata = await fetch("https://swapi.dev/api/planets/" + number);
  const resData = await APIdata.json();

  subCont.innerHTML = `
    <div class="sub-container">
        <ul class="ul-grid-one">
            <li>NAME: <a class="input" href="">${resData.name}</a></li>
            <li>ROTAION_PERIOD: <a class="input" href="">${resData.rotation_period}</a></li>
            <li>ORBITAL PERIOD: <a class="input" href="">${resData.orbital_period}</a></li>
            <li>CLIMATE: <a class="input" href="">${resData.diameter}</a></li>
            <li>GRAVITY: <a class="input" href="">${resData.climate}</a></li>
            <li>TERRAIN: <a class="input" href="">${resData.gravity}</a></li>
            <li>POPULATION: <a class="input" href="">${resData.population}</a></li>
        </ul>
    </div>
    <div class="btn-div">
        <button onclick="planetName(num--)" class="btn">Previous</button>
        <button onclick="planetName(num++)" class="btn">Next</button>
    </div>
  `;

  document.body.appendChild(subCont);
}

async function filmName(number) {
  const APIdata = await fetch("https://swapi.dev/api/films/" + number);
  const resData = await APIdata.json();

  console.log(resData);

  subCont.innerHTML = `
  <div class="sub-container">
      <ul class="ul-grid-one">
          <li>TITLE: <a class="input" href="">${resData.title}</a></li>
          <li>EPISODE ID: <a class="input" href="">${resData.episode_id}</a></li>
          <li>OPENING CRAWL: <a class="input" href="">${resData.opening_crawl}</a></li>
          <li>DIRECTOR: <a class="input" href="">${resData.director}</a></li>
          <li>PRODUCER: <a class="input" href="">${resData.producer}</a></li>
          <li>RELEASE DATE: <a class="input" href="">${resData.release_date}</a></li>
      </ul>
  </div>
  <div class="btn-div">
      <button onclick="filmName(num--)"class="btn">Previous</button>
      <button onclick="filmName(num++)" class="btn">Next</button>
  </div>
`;

  document.body.appendChild(subCont);
}

async function speciesName(number) {
  const APIdata = await fetch("https://swapi.dev/api/species/" + number);
  const resData = await APIdata.json();

  subCont.innerHTML = `
  <div class="sub-container">
      <ul class="ul-grid-one">
          <li>NAME: <a class="input" href="">${resData.name}</a></li>
          <li>CLASSIFICATION: <a class="input" href="">${resData.classification}</a></li>
          <li>DESIGNATION: <a class="input" href="">${resData.designation}</a></li>
          <li>AVERAGE HEIGHT: <a class="input" href="">${resData.average_height}</a></li>
          <li>SKIN COLOR: <a class="input" href="">${resData.skin_colors}</a></li>
          <li>EYE COLOR: <a class="input" href="">${resData.eye_colors}</a></li>
          <li>LANGUAGE: <a class="input" href="">${resData.language}</a></li>
      </ul>
  </div>
  <div class="btn-div">
      <button onclick="speciesName(num--)" class="btn">Previous</button>
      <button onclick="speciesName(num++)" class="btn">Next</button>
  </div>
`;

  document.body.appendChild(subCont);
}

// vehicle

async function vehiclesName(number) {
  const APIdata = await fetch("https://swapi.dev/api/vehicles/" + number);
  const resData = await APIdata.json();

  if (resData.status === 0) {
    number++;
  } else {

  subCont.innerHTML = `
  <div class="sub-container">
      <ul class="ul-grid-one">
          <li>NAME: <a class="input" href="">${resData.name}</a></li>
          <li>MODEL: <a class="input" href="">${resData.model}</a></li>
          <li>MANUFACTURER: <a class="input" href="">${resData.manufacturer}</a></li>
          <li>COST IN CREDITS: <a class="input" href="">${resData.cost_in_credits}</a></li>
          <li>LENGTH: <a class="input" href="">${resData.length}</a></li>
          <li>CREW: <a class="input" href="">${resData.crew}</a></li>
          <li>PASSENGER: <a class="input" href="">${resData.passengers}</a></li>
      </ul>
  </div>
  <div class="btn-div">
      <button onclick="vehiclesName(vehNum--)" class="btn">Previous</button>
      <button onclick="vehiclesName(vehNum++)" class="btn">Next</button>
  </div>
`;

    document.body.appendChild(subCont);
  }
}

// starship

async function starshipName(number) {
  const APIdata = await fetch("https://swapi.dev/api/starships/"+number);
  const resData = await APIdata.json();

  if (resData.status === 404) {
    number++;
  } else {
    subCont.innerHTML = `
  <div class="sub-container">
      <ul class="ul-grid-one">
          <li>NAME: <a class="input" href="">${resData.name}</a></li>
          <li>MODEL: <a class="input" href="">${resData.model}</a></li>
          <li>MANUFACTURER: <a class="input" href="">${resData.manufacturer}</a></li>
          <li>COST IN CREDITS: <a class="input" href="">${resData.cost_in_credits}</a></li>
          <li>LENGTH: <a class="input" href="">${resData.length}</a></li>
          <li>CREW: <a class="input" href="">${resData.crew}</a></li>
          <li>PASSENGER: <a class="input" href="">${resData.passengers}</a></li>
      </ul>
  </div>
  <div class="btn-div">
      <button onclick="starshipName(vehNum--)" class="btn">Previous</button>
      <button onclick="starshipName(vehNum++)" class="btn">Next</button>
  </div>
`;

    document.body.appendChild(subCont);
  }
}

window.addEventListener("load", (e) => {
  e.preventDefault();
  peopleName(num);
});
