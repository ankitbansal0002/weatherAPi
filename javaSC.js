const main = document.getElementById('main');
const form = document.getElementById('form');
const input = document.getElementById('search');
const heading = document.getElementById('heading');
const appKey = "52f36a8a549e70f2bbc8a5ba92db458a";
const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appKey}`;

async function getWeatherByLocation(location){

    const repo = await fetch(url(location), {origin: "cors"});

    const repositery = await repo.json();

    console.log(repositery);
    
    addWeatherToPage(repositery);
    addCityNameToPage(repositery);

}

function addWeatherToPage(data){

    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');

    weather.classList.add('weather');

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

    main.innerHTML = "";
    main.appendChild(weather);

}

function addCityNameToPage(data){

    const city = data.name;

    const cityName = document.createElement('div');

    cityName.classList.add('cityName');

    cityName.innerText = city;

    heading.innerHTML = "";
    heading.appendChild(cityName);

}


function KtoC(temp){
    // 0K − 273.15 = -273.1°C

    return temp = Math.floor(temp - 273.15);

}


// getWeatherByLocation("london");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const val = input.value;
    
    if(val){
        getWeatherByLocation(val);
    }
    if(!val){
        document.location.reload();
    }
})

const users = [

    { firstName: "akshay", lastName: "saini", age: 26 },

{ firstName: "donald", lastName: "trump", age: 75 },

{firstName: "elon", lastName: "musk", age: 50 },

{firstName: "deepika", lastName: "padukone", age: 26 },

];




const output = users.reduce(function (acc, curr){
    if(curr.age < 30){
        const a = 10;
        acc.push(a);
    }
    return acc;
}, {});

// console.log(output);